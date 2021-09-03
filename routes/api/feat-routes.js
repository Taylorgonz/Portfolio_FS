const router = require('express').Router();
const { Features } = require('../../models');
// Get all Featuress
router.get('/', (req, res) => {
    Features.findAll({
        attributes: [
            'id',
            'websiteId',
            'name'
        ],
    })
        .then(featuresData => res.json(featuresData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});



// POST a new Features
router.post('/', (req, res) => {
    Features.create({
        websiteId: req.body.websiteId,
        name: req.body.name
    })
        .then(featuresData => res.json(featuresData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// DELETE a Features
router.delete('/:id', (req, res) => {
    Features.findOne({
        where: {
            id: req.params.id
        }
    }).then(featuresData => {
        if (requestorIsNotOwner(featuresData.userId, req.user)) {
            res.status(403).json({ message: "Unauthorized action" });
            return;
        }
        Features.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(featuresData => {
                if (!featuresData) {
                    res.status(404).json({ message: "No Features found" });
                    return;
                }
                res.json(featuresData);
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