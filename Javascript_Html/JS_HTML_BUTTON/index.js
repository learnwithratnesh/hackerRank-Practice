document.addEventListener("DOMContentLoaded", () => {
  let count = 1;
  console.log("--------------------DOMContentLoaded-----------");
  button = document.querySelector(".btn");
  button.addEventListener(
    "click",
    () => {
      button.innerHTML = count++;
    }
  );
});
