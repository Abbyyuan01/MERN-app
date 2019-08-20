const router = require('express').Router()
let User = require('../models/user.model')

//get all users
router.get('/', async (req, res) => {
    await User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));   
});

router.post('/add', async (req, res) => {
    const username = req.body.username
    const newUser = new User({username})

    await newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+ err));   
});

module.exports = router;
