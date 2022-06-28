let feedback = document.getElementById("feedback");
let feedbackModal = document.getElementById("feedbackModal");
let fbFlex = document.getElementById("feedbackFlex");
let closeFeedbackModal = document.getElementById("closeFeedbackModal");
let okFeedbackModal = document.getElementById("okFeedbackModal");

feedback.addEventListener("click", function () {
  feedbackModal.style.display = "block";
});

closeFeedbackModal.addEventListener("click", function () {
  feedbackModal.style.display = "none";
  sideMenu.checked = false;
});

window.addEventListener("click", function (e) {
  if (e.target == fbFlex) {
    feedbackModal.style.display = "none";
    sideMenu.checked = false;
  }
});
