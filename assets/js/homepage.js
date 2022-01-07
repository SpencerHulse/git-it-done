let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#username");

let getUserRepos = (user) => {
  //format the github api url
  let apiUrl = "https://api.github.com/users/" + user + "/repos";

  //make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

let formSubmitHandler = (event) => {
  event.preventDefault();

  //get value from input element
  let username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
  } else {
    alert("Please enter a GitHub username");
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);

getUserRepos();
