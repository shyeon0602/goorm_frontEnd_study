import { Github } from "./github.js";
import { UI } from "./ui.js";

const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  console.log("User input:", userText); // 디버깅을 위한 콘솔 로그

  if (userText !== "") {
    github
      .getUser(userText)
      .then((data) => {
        console.log("API Response:", data); // 응답 데이터 확인
        if (data.profile.message === "Not Found") {
          ui.showAlert("User Not Found", "alert alert-danger");
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
      .catch((error) => {
        console.error("Error during API call:", error); // 에러 확인
      });
  } else {
    ui.clearProfile();
  }
});
