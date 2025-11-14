fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Example: sirf names ka array
    const names = data.map((user) => user.name);
    console.log(names);
    const username = data.map((user) => user.username);
    console.log(username);
  });
