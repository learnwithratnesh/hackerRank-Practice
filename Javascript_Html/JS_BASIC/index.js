document.addEventListener("DOMContentLoaded", () => {
  var div = document.querySelector("div");
  var button = document.querySelector("button");

  div.addEventListener(
    "click",
    () => {
      alert("div clicked");
    },
    true
  );

  button.addEventListener(
    "click",
    () => {
      alert("button clicked");
    },
    false
  );
});
