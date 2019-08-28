const router = require('express').Router()
let Exercise = require('../models/exercise.model')

//get all exercises
router.get('/', async (req, res) => {
    await Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: '+ err));   
});

//add exercise
router.post('/add', async (req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    await newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: '+ err));   
});

//get exercise by id
router.get('/:id', async (req, res) => {
    await Exercise.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: '+ err));   
});

//delete exercise by id
router.delete('/:id', async (req, res) => {
    await Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: '+ err));   
});

//update exercise
router.post('/update/:id', async (req, res) => {
    await Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = Number(req.body.duration)
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: '+ err));  
        })
        .catch(err => res.status(400).json('Error: '+ err))        
});


module.exports = router;
