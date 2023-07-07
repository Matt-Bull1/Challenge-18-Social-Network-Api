const { Thought, User } = require("../models");

module.exports = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get a thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      })

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      await User.findOneAndUpdate(
        { username: thought.username },
        { $addToSet: { thoughts: thought } },
        { new: true }
      );

      return res.json('Thought Created');
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // update a thought
  async updateThought (req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        );

        if (!thought) {
          return res.status(404).json({ message: "No thought with that ID" });
        };
        
        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  },

  // delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }

      res.json({ message: "Thought deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a reaction
  async createReaction (req, res) {
    try {
        const reaction = await Reaction.create(req.body)
        const thought = await Thought.findOneAndUpdate(
            { _id: req.body.thoughtId },
            { $addToSet: { reactions: reaction._id } },
            { runValidators: true, new: true }
        );

        if (!thought) {
          return res.status(404).json({ message: "No thought with that ID" });
        };

        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  },

  // delete a reaction
  async deleteReaction (req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { new: true}
        );

        if (!thought) {
          return res.status(404).json({ message: "No thought or reaction found with that ID"});
        };

        res.json({ message: "Reaction successfully deleted!" });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  }
};