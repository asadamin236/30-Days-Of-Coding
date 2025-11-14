const messyData = {
  user: {
    id: 101,
    name: "Asad",
    age: 24,
    contact: {
      email: "asad@example.com",
      phones: ["03001234567", "03101234567"],
    },
    hobbies: [
      "coding",
      "reading",
      { type: "sports", list: ["cricket", "football"] },
    ],
    isActive: true,
  },
  posts: [
    { id: 1, title: "JS Basics", likes: 150, tags: ["javascript", "basics"] },
    { id: 2, title: "JSON Tricks", likes: 200, tags: ["json", "objects"] },
    { id: 3, title: "Arrays Deep Dive", likes: 180, tags: ["arrays", "loops"] },
  ],
  settings: {
    theme: "dark",

    notifications: { email: true, sms: false },
    savedItems: [],
  },
};

//Print the user's email.
console.log(messyData.user.contact.email);
//Print the first hobby of the user.
console.log(messyData.user.hobbies[0]);
//Print the second sport in the hobbies list.
console.log(messyData.user.hobbies[2].list[1]);

//Loop through all post titles and print them.
const titles = messyData.posts.forEach((element) => {
  console.log(element.title);
});
//Loop through the tags of the second post and print them.
const secondTags = messyData.posts[1].tags;
const tags = secondTags.forEach(function (element) {
  console.log(element);
});

// Convert to JSON string and back
const jsonString = JSON.stringify(messyData);
const parsedData = JSON.parse(jsonString);
//Extract theme value using object destructuring
const { theme } = messyData.settings;
console.log(theme);
//Check if the user is active. If yes, print “User is active”.
if (messyData.user.isActive === true) {
  console.log(`The user is Active ${messyData.user.name}`);
}
//Add a new hobby “gaming” to the user’s hobbies.
messyData.user.hobbies.push("Gaming");
console.log(messyData.user.hobbies);
console.log(messyData);
//Add a new post to the posts array with your own data.
messyData.posts.push({
  id: 4,
  title: "Python Basics",
  likes: 500,
  tags: ["Arrays", "Tuples"],
});
console.log(messyData);

// Count total number of tags across all posts
const totalTags = messyData.posts.reduce(
  (sum, post) => sum + post.tags.length,
  0
);

console.log(totalTags);
//Print all phone numbers of the user.
console.log(messyData.user.contact.phones);
