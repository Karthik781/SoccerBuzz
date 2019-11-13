const router = require('express').Router();
let Club = require('../models/club.models');

router.route('/').get((req, res)=>{
    Club.find()
    .then(clubs => res.json(clubs))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
    const clubname = req.body.clubname;
    const shortname = req.body.shortname;
    const founded = Number(req.body.founded);
    const country = req.body.country;

    const newClub = new Club({
        clubname,
        shortname,
        founded,
        country,
    });

    newClub.save()
    .then(()=> res.json('Club added!'))
    .catch(err => res.status(400).json('Error adding club!'+ err));
});

router.route('/:id').get((req,res)=> {
    Club.findById(req.params.id)
    .then(club => res.json(club))
    .catch(err => res.status(400).json('Error retriving club!' + err ));
});

router.route('/:id').delete((req, res)=> {
    Club.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted successfully!"))
    .catch(err => res.status(400).json('Error deleting club!' + err ));
});

module.exports = router;