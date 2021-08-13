const router = require('express').Router();
const { Photo } = require('../../models');
// Get all photos
router.get('/', (req, res) => {
    Photo.findAll({
        attributes: [
            'id',
            'url',
        ],
    })
        .then(photoData => res.json(photoData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});



// POST a new photo
router.post('/', (req, res) => {
    Photo.create({
        url: req.body.url,
        userId: req.user.sub,
        bikeId: req.body.bikeId
    })
        .then(photoData => res.json(photoData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// DELETE a photo
router.delete('/:id', (req, res) => {
    Photo.findOne({
        where: {
            id: req.params.id
        }
    }).then(photoData => {
        if (requestorIsNotOwner(photoData.userId, req.user)) {
            res.status(403).json({ message: "Unauthorized action" });
            return;
        }
        Photo.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(photoData => {
                if (!photoData) {
                    res.status(404).json({ message: "No photo found" });
                    return;
                }
                res.json(photoData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;