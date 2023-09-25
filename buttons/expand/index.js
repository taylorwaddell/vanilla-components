let dynamicIsExpanded = false;

document.getElementById("dynamic").addEventListener("click", () => {
  if (dynamicIsExpanded) {
    setCSSVariable("--dynamicTextControl", "none");
    concealWord();
    dynamicIsExpanded = false;
  } else {
    setCSSVariable("--dynamicTextControl", "inline-block");
    revealWord();
    dynamicIsExpanded = true;
  }
});

let container = document.getElementById("dynamic-text");
let width = 0;

function revealWord() {
  if (width < 100) {
    width++;
    container.style.width = width + "%";
    requestAnimationFrame(revealWord);
  }
}

function concealWord() {
  if (width > 0) {
    width--;
    container.style.width = width + "%";
    requestAnimationFrame(concealWord);
  }
}

function setCSSVariable(variableName, newVariableValue) {
  document.documentElement.style.setProperty(variableName, newVariableValue);
}
