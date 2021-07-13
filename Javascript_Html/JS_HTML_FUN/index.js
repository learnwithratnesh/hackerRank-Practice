function callMethod(ev) {
  console.log("--------------------called-----------");
  ev.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("--------------------DOMContentLoaded-----------");
  parenDiv = document.querySelector(".parent-div");
  childDiv = document.querySelector(".child-div");
  parenDiv.addEventListener(
    "click",
    () => {
      alert("parent div");
    },
    true
  );

  childDiv.addEventListener(
    "click",
    (event) => {
      alert("child div");
      // event.stopPropagation();
    },
    false
  );
});
