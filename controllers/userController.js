const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// const friendCount = async () => {
//   const numberOfFriends = await User.aggregate().count('friendCount');
//   return numberOfFriends;
// };

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      // TODO: update get route with virtual that counts friends and return that as the json response
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true, runValidators: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No such student exists' });
      }

      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndRemove({
        _id: req.params.userId,
      });

      if (!deletedUser) {
        return res.status(404).json({ message: 'No such student exists' });
      }

      console.log(deletedUser);
      const thoughtsArr = deletedUser.thoughts;
      console.log(thoughtsArr);
      for (let i = 0; i < thoughtsArr.length; i++) {
        await Thought.findOneAndRemove({
          _id: thoughtsArr[i],
        });
      }

      return res.json({
        message: 'User and Associated thoughts deleted',
        deletedUser,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  },
  async addFriend(req, res) {},
  async deleteFriend(req, res) {},
};
