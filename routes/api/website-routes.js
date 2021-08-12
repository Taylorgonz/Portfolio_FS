const router = require('express').Router();
const { Websites } = require('../../models');

// Get all photos
router.get('/', (req, res) => {
    Websites.findAll({
        attributes: [
            'id',
            'title',
            'image',
            'description',
            'url',
            'github_url'
            
        ],
    })
        .then(websiteData => res.json(websiteData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});



// POST a new website
router.post('/', withAuth, (req, res) => {
    Websites.create({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        url: req.body.url,
        github_url: req.body.github_url,
    })
        .then(websiteData => res.json(websiteData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// DELETE a website
router.delete('/:id', withAuth, (req, res) => {
    Websites.findOne({
        where: {
            id: req.params.id
        }
    }).then(websiteData => {
        if (requestorIsNotOwner(websiteData.userId, req.user)) {
            res.status(403).json({ message: "Unauthorized action" });
            return;
        }
        Websites.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(websiteData => {
                if (!websiteData) {
                    res.status(404).json({ message: "No website found" });
                    return;
                }
                res.json(websiteData);
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