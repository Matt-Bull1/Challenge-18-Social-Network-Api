const router = require('express').Router();
const { 
        getThoughts,
        getOneThought,
        createThought,
        updateThought,
        deleteThought,
        createReaction,
        deleteReaction,

 } = require('../../controllers/thoughtController');


//api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

//api/thoughts
router.route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);


//api/thoughts
router.route('/:thoughtId/reactions')
    .post(createReaction);


//api/thoughts
router.route('/:thoughtId/reactions/:reaction_id')
    .delete(deleteReaction);


module.exports = router;