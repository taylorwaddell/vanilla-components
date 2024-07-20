const follower = document.getElementById("follower");
let preventTracking = false;

function tracker(event) {
  if (preventTracking) return;
  follower.style.left = event.pageX + "px";
  follower.style.top = event.pageY + "px";
}

function resetFollowerStyles() {
  follower.style.backgroundColor = "#333";
  follower.style.height = "0px";
  follower.style.width = "0px";
  follower.style.border = "none";
}

function setFollowerToTargetDimensions(boundingClientRect) {
  preventTracking = true;
  follower.style.width = `${boundingClientRect.width - 4.8}px`;
  follower.style.height = `${boundingClientRect.height - 4.8}px`;
  follower.style.left = `${boundingClientRect.x - 4.8}px`;
  follower.style.top = `${boundingClientRect.y - 4.8}px`;
  follower.style.border = "2px solid red";
  follower.style.backgroundColor = "transparent";
}

document.addEventListener("mousemove", tracker);

document.querySelectorAll("button").forEach((button) => {
  console.log(button.getBoundingClientRect());
  console.log(follower);
  button.addEventListener("mouseenter", () => {
    setFollowerToTargetDimensions(button.getBoundingClientRect());
    button.focus();
  });
});
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseleave", () => {
    preventTracking = false;
    resetFollowerStyles();
  });
});
