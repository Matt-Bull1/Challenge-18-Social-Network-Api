const router = require('express').Router();
const { getThoughts, 
        createThought, 
        getSingleThought, 
        updateThought,
        deleteThought,
        createReaction,
        deleteReaction 
    } = require('../../controllers/thoughtController');


//api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

//api/thoughts
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

//api/thoughts
router.route('/:thoughtId/reactions')
    .post(createReaction);

//api/thoughts
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;