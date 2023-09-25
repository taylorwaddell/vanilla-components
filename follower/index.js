document.addEventListener("mousemove", function (event) {
  const follower = document.getElementById("follower");
  follower.style.left = event.pageX + "px";
  follower.style.top = event.pageY + "px";
});
