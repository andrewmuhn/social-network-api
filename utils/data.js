const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughts = [
  "I'm Tired",
  "I got hacked, don't click on the links I sent",
  'OMG I saw the weirdest thing at the BUX',
  'Bet',
  "YEEEEE, Somebody make me touch grass!! I've been coding waaaay too long",
  "If you act now You can join me in this revolution. For my friends I've made my promotional how to be a success autobiography available for the low price of 59.99 monthly subscription!",
  'Poke',
  'Hello world',
  'I Hate Stupid Social Media App it is sucking my soul away. In 3 days I am going to delete my account if you want to stay friends and you do not have my number already message me before it is too late.',
  'CAT PHOTO BOMB',
  "*snicker* Hehe *moves hair out of face* You're Cute",
];

const symbols = ['', '+', '!', '_', '-', '&', '*', '$', '<(^-^<)', 'xX', 'Xx'];
const reactions = [
  'Wow',
  'Really',
  'Good Work',
  ':)',
  ':(',
  ':/',
  '2/10',
  '10/10 would recommend',
];

const emailPrefix = ['gmail', 'yahoo', 'aol', 'netscape', 'microsoft', 'apple'];
const emailSuffix = ['com', 'org', 'net', 'edu', 'io', 'eu', 'dog'];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(symbols)}${getRandomArrItem(names)}${getRandomArrItem(
    names
  )}${getRandomArrItem(symbols)}`;

const getRandomUser = () => {
  const username = getRandomName();
  const email = `${username}@${getRandomArrItem(
    emailPrefix
  )}.${getRandomArrItem(emailSuffix)}`;
  return { username, email };
};

// Function to generate random thoughts that we can add to user object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
    });
  }
  return results;
};

const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  getRandomUser,
  getRandomThoughts,
  getRandomReactions,
  getRandomArrItem,
};
