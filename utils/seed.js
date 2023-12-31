const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUser, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once('open', async () => {
    console.log('connected');
  
    // Drop existing users
    await User.deleteMany({});
  
    // Drop existing thoughts
    await Thought.deleteMany({});
  
    // Create empty array to hold the users
    const users = [];
  
    // Loop 7 times -- add users to the users array
    for (let i = 0; i < 7; i++) {
      // Get some random assignment objects using a helper function that we imported from ./data
      const username = getRandomUser();
      const email = username + "@gmail.com"
  
      const thought = await Thought.create({
        thoughtText: getRandomThought(),
        username,
      });
  
      users.push({
        username,
        email,
        thoughts: [thought.thoughtText],
      });
    }
  
    // Add users to the collection and await the results
    await User.collection.insertMany(users);
  
    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });
  
