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
  console.log(following);
  console.log(followers);
  const notfollowingArray = [];
  
  for (let i = 0; i < followers.length; i++) {
    let a = 0;
    for (let j = 0; j < following.length; j++) {
      if (followers[i] === following[j]) {
        a = 1;
      }
    }
    if (a === 0) {
      notfollowingArray.push(followers[i]);
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
          ui.showNotFollowing(notfollowing(github.followersArray, github.followingArray));
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
