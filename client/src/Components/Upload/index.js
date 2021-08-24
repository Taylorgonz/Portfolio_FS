import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'




const Upload = () => {
    const [photos, setPhotos] = useState([]);
    const [previewPhotos, setPreviewPhotos] = useState("");
    const [loadedImage, setLoadedImage] = useState();

    const getPics = () => {
        axios.get('/api/photos')
            .then(res => setPhotos(res.data))
            .catch(err => setPhotos([err]));
    }


    const imagePreview = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {

            setPreviewPhotos(reader.result)
        }

    }

    // getPics();
    const uploadImage = (files) => {
        const formData = new FormData()
        formData.append('file', files);
        formData.append('upload_preset', 'atlyurpl')
        setLoadedImage(formData)
        console.log(files)


    }

    const postImage = () => {

        axios.post("https://api.cloudinary.com/v1_1/dgyo5rbhq/image/upload", loadedImage).then((res) => {

            console.log(res.data)

            axios.post('/api/photos',
                {
                    'url': res.data.url
                }).then(
                    getPics(),
                    setLoadedImage(""),
                    setPreviewPhotos("")
                )

        })

    }

    useEffect(() => {
        if (photos.length === 0) getPics();
    }, [photos])






    return (
        <Container >
            <h2> UPLOAD</h2>
            <form className="photoForm">
                <input type="file" id="photoUpload" name="fileName" onChange={(e) => {
                    imagePreview(e.target.files[0])
                    uploadImage(e.target.files[0])
                }}
                />
                <button  type="button" onClick={(e) => postImage()}>Submit</button>
            </form>

            {
                previewPhotos &&
                <img className="previewImage" src={previewPhotos} />
            }

            <hr />
            {photos.map((photo, i) =>
                <Col>

                    <img className="photoImages" key={i} src={photo.url}></img>

                </Col>
            )}


        </Container>
    )
}

export default Upload;