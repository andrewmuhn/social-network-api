const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      return res.json(thoughts);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOne({ _id: req.body.username });
      console.log(user);
      user.thoughts.push(thought.username);
      console.log(user);
      await user.save();
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        req.body,
        { new: true, runValidators: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No such thought exists' });
      }
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });
      if (!thought) {
        return res.status(404).json({ message: 'No such thought exists' });
      }
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      thought.reactions.push(req.body);
      await thought.save();
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      const reactionEqual = (el) => {
        if (el.reactionId.toString() === req.params.reactionId) {
          return true;
        }
      };
      const reactionIndex = thought.reactions.findIndex(reactionEqual);
      if (reactionIndex === -1) {
        return res
          .status(404)
          .json({ message: 'No reaction with that id found' });
      }
      thought.reactions.splice(reactionIndex, 1);
      await thought.save();
      return res.json(thought);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
};
