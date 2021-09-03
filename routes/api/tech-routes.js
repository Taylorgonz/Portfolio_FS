const router = require('express').Router();
const { Tech } = require('../../models');
// Get all techs
router.get('/', (req, res) => {
    Tech.findAll({
        attributes: [
            'id',
            'webId',
            'name'
        ],
    })
        .then(techData => res.json(techData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});



// POST a new tech
router.post('/', (req, res) => {
    Tech.create({
        web: req.body.webId,
        name: req.body.name
    })
        .then(techData => res.json(techData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// DELETE a tech
router.delete('/:id', (req, res) => {
    Tech.findOne({
        where: {
            id: req.params.id
        }
    }).then(techData => {
        if (requestorIsNotOwner(techData.userId, req.user)) {
            res.status(403).json({ message: "Unauthorized action" });
            return;
        }
        tech.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(techData => {
                if (!techData) {
                    res.status(404).json({ message: "No tech found" });
                    return;
                }
                res.json(techData);
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