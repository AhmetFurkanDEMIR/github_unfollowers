const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListener();

function eventListener() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function notfollowing(following, followers) {
  const followingArray = [];
  const followersArray = [];
  const notfollowingArray = [];
  for (let i = 0; i < following.length; i++) {
    console.log(following[i].login);
    followingArray.push(following[i].login);
  }
  for (let i = 0; i < followers.length; i++) {
    console.log(followers[i].login);
    followersArray.push(followers[i].login);
  }
  for (let i = 0; i < followersArray.length; i++) {
    let a = 0;
    for (let j = 0; j < followingArray.length; j++) {
      if (followersArray[i] === followingArray[j]) {
        a = 1;
      }
    }
    if (a === 0) {
      notfollowingArray.push(followersArray[i]);
    }
  }
  return notfollowingArray;
}

function getData(e) {
  let username = nameInput.value.trim();
  if (username === "") {
    alert("Please enter a username");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          ui.showError("User not found");
        } else {
          ui.addSearchedUserToUI(username);
          Storage.addSearchedUsersToStorage(username);
          ui.showUserInfo(response.user);
          
          ui.showNotFollowing(notfollowing(response.followers, response.following));
          ui.showRepoInfo(response.repo);
        }
      })
      .catch((err) => ui.showError(err));
  }

  ui.clearInput();
  e.preventDefault();
}

function clearAllSearched() {
  if (confirm("Are you sure you want to clear all searched users?")) {
    console.log("Clearing all searched users");

    Storage.clearAllSearchedUsersToStorage();
    ui.clearAllSearchedUsersToUI();
  }
}

function getAllSearched(e) {
  let users = Storage.getSearchedUsersFromStorage();
  let result = "";
  users.forEach((user) => {
    result += `<li class='list-group-item'>${user}</li> `;
  });
  lastUsers.innerHTML = result;
}
