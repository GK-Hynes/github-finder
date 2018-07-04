// Init GitHub
const github = new GitHub();

// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear the profile
  }
});
