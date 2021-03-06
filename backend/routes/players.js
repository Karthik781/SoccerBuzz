const router = require('express').Router();
let Player = require('../models/player.models');

router.route('/').get((req, res)=>{
    Player.find()
    .then(players => res.json(players))
    .catch(err => res.status(400).json('Error getting players!' + err));
});

router.route('/add').post((req, res)=>{
    const playername = req.body.playername;
    const age = Number(req.body.age);
    const nationality = req.body.nationality;
    const contract = Number(req.body.contract);
    const club = req.body.club;
    const club_id = req.body.club_id;

    const newPlayer = new Player({
        playername,
        age,
        nationality,
        contract,
        club,
        club_id
    });

    newPlayer.save()
    .then(()=> res.json('player added!'))
    .catch(err => res.status(400).json('Error adding player!'+ err));
});

router.route('/:id').get((req,res)=> {
    Player.findById(req.params.id)
    .then(club => res.json(club))
    .catch(err => res.status(400).json('Error retriving player!' + err ));
});

router.route('/edit/:id').post((req, res)=>{
    Player.findById(req.params.id)
    .then(player => {

        player.playername = req.body.playername;
        player.age = Number(req.body.age);
        player.nationality = req.body.nationality;
        player.contract = Number(req.body.contract);
        player.club = req.body.club;
        player.club_id = req.body.club_id;
    
    
        player.save()
        .then(()=> res.json('player updated!'))
        .catch(err => res.status(400).json('Error editing player!'+ err));
    })

});

module.exports = router;

