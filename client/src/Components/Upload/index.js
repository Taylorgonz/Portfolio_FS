import React, { useState, useEffect, useRef, useCallback } from "react"
import { Link } from 'react-router-dom'
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios'
import { getAuth, signOut } from 'firebase/auth'




const Upload = ({ setModalMain, setModalImage }) => {
    const [photos, setPhotos] = useState([]);
    const [webDev, setWebDev] = useState([]);
    const [previewPhotos, setPreviewPhotos] = useState("");
    const [loadedImage, setLoadedImage] = useState();
    const [loadedDevImage, setLoadedDevImage] = useState();
    const [tech, setTech] = useState([])
    const [features, setFeatures] = useState([])
    let photoCat = useRef()
    let webTitle = useRef();
    let webDesc = useRef();
    let webLink = useRef();
    let webGithub = useRef();
    let techRef = useRef();
    let featRef = useRef();



    const getPics = () => {
        axios.get('/api/photos')
            .then(res => setPhotos(res.data))
            .catch(err => setPhotos([err]));
    }

    const getWebsites = () => {
        axios.get('/api/websites')
            .then(res => setWebDev(res.data))
            .catch(err => setWebDev([err]));
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
        
    }

    const uploadDevImage = (files) => {
        const formData = new FormData()
        formData.append('file', files);
        formData.append('upload_preset', 'atlyurpl')
        setLoadedDevImage(formData)
        
    }

    const postImage = () => {

        axios.post("https://api.cloudinary.com/v1_1/dgyo5rbhq/image/upload", loadedImage).then((res) => {

           

            axios.post('/api/photos',
                {
                    'url': res.data.url,
                    'category': photoCat.current.value
                }).then(
                    setLoadedImage(""),
                    setPreviewPhotos(""),
                    getPics()
                )

        })

    }
    const postDevApp = () => {

        axios.post("https://api.cloudinary.com/v1_1/dgyo5rbhq/image/upload", loadedDevImage).then((res) => {

           

            axios.post('/api/websites',
                {
                    'image': res.data.url,
                    'title': webTitle.current.value,
                    'description': webDesc.current.value,
                    'url': webLink.current.value,
                    'github_url': webGithub.current.value
                }).then(
                    setLoadedDevImage(""),
                    setPreviewPhotos(""),
                    webTitle.current.value = '',
                    webDesc.current.value = '',
                    webLink.current.value = '',
                    webGithub.current.value = '',
                    getWebsites()
                )

        })

    }

    useEffect(() => {
        if (photos.length === 0)
            getPics()
        getWebsites()
    }, [photos])





    return (
        <Container className='uploadContainer' >
            <h1> UPLOAD</h1>
            <button onClick={() => signOut(getAuth())}>  Signout </button>
            <button><Link style={{ color: "black" }} to="/">Homepage</Link></button>
            {/* --------------------- photo uploads ---------------------- */}
            <hr />
            <h2>Photos</h2>
            <form className="photoForm">
                <input type="file" id="photoUpload" name="fileName" onChange={(e) => {
                    imagePreview(e.target.files[0])
                    uploadImage(e.target.files[0])
                }}
                />

                <select ref={photoCat} name="category" id="category">
                    <option value="portrait">Portrait</option>
                    <option value="product">Product</option>
                    <option value="lifestyle">Lifestyle</option>
                </select>
                <button type="button" onClick={(e) => postImage()}>Submit</button>
            </form>

            <Row className='previewImageWrapper '>
                {
                    previewPhotos &&
                    <Col s='12'>
                        <img onClick={() => setModalMain(previewPhotos)} className="previewImage" src={previewPhotos} />
                    </Col>
                }
            </Row>

            <hr />
            <Row className="photoUploadDisplay">
                {photos.map((photo, i) =>
                    <Col m='auto' className='uploadedImagesWrapper justify-content-center'>

                        <img onClick={() => {
                            setModalMain(photo.url)
                            setModalImage(photos)
                        }} className="photoImagesUpload" key={i} src={photo.url}/>

                    </Col>
                )}
            </Row>

            <hr />
            {/* --------------------- WebDev uploads ----------------------- */}
            <h2>WebDev</h2>
            <form className="webDevForm">
                <input type="file" id="webDevUpload" name="fileName" onChange={(e) => {
                    imagePreview(e.target.files[0])
                    uploadDevImage(e.target.files[0])
                }}
                />
                <label for="appTitle">Title</label>
                <input ref={webTitle} id="appTitle" type="text" name="appTitle" />
                <label for="appDesc">Description</label>
                <textarea ref={webDesc} id='appDesc' rows='10' placeholder="Description of app" />

                <label for="appLink">Site Link</label>
                <input ref={webLink} id="appLink" type="text" name="appLink" />

                <label for="appGitHub">GitHub Link</label>
                <input ref={webGithub} id="appGitHub" type="text" name="appGitHub" />
                <div className='techFeatInput'>
                    <div>
                        <input ref={techRef} id="technology" placeholder="technology" type='text' />
                        <button type="button" onClick={(e) => {
                            setTech(arr => [...arr, techRef.current.value])
                            console.log(tech)

                        }
                        }>add</button>
                    </div>
                    <div className="techDisplay">

                     
                                {tech.map((name, i) =>
                                    <p>{name}</p>
                                )}
                       

                    </div>
                    <div>
                        <input ref={featRef} id="features" placeholder="features" type='text' />
                        <button type="button" onClick={(e) => {
                            setFeatures(arr => [...arr, featRef.current.value])
                        
                            console.log(tech)
                        }
                        }>add</button>
                    </div>
                    <div className="featDisplay">
                                {features.map((name, i) =>
                                    <p>{name.index}</p>
                                )}
                    </div>


                </div>

                <button type="button" onClick={(e) => postDevApp()}>Submit</button>

            </form>
            <hr />
            <Row className="photoUploadDisplay">


                {webDev.map((web, i) =>
                    <div>
                        <img className='webDevDisplayImg' src={web.image} />
                        <h2>{web.title}</h2>
                        <h3> Description</h3>
                        <p>{web.description}</p>
                        <ul>
                            <li><a href={web.url}>Site Link</a></li>
                            <li><a href={web.github_url}>Git Hub</a></li>
                        </ul>
                        <hr />
                    </div>
                )
                }
            </Row>


        </Container>
    )
}

export default Upload;