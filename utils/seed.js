const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const {
  getRandomUser,
  getRandomThoughts,
  getRandomReactions,
  getRandomArrItem,
} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});
  await User.deleteMany({});

  const usersArr = [];
  const thoughtData = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const user = getRandomUser();
    usersArr.push(user);
  }

  await User.collection.insertMany(usersArr);

  const users = await User.find({}, { _id: 1 });
  const reactionData = getRandomReactions(5);
  const reactions = reactionData.map((reaction) => {
    return { ...reaction, username: getRandomArrItem(users)._id };
  });

  const thoughtsArr = thoughtData.map((thought) => {
    return {
      ...thought,
      username: getRandomArrItem(users)._id,
      reactions: [getRandomArrItem(reactions), getRandomArrItem(reactions)],
    };
  });

  await Thought.collection.insertMany(thoughtsArr);

  for (let i = 0; i < users.length; i++) {
    const user = await User.findById(users[i]._id);
    const thoughts = await Thought.find({ username: user._id });
    user.thoughts = thoughts;
    await user.save();
    console.log(user);
  }

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
