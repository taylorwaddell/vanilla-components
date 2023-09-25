let isDark = true;

document.addEventListener("keydown", function (keyboardEvent) {
  isCommandOrControlK(keyboardEvent) && setPrimaryColor();
});

function isCommandOrControlK(keyboardEvent) {
  return (
    keyboardEvent.key === "k" &&
    (keyboardEvent.metaKey || keyboardEvent.ctrlKey)
  );
}

function setPrimaryColor() {
  if (isDark) {
    setCSSVariable("--font-color", "rgb(100, 100, 100)");
    setCSSVariable("--primary-color", "rgb(230,230,230)");
    isDark = false;
  } else {
    setCSSVariable("--primary-color", "rgb(30, 30, 30)");
    setCSSVariable("--font-color", "rgb(200, 200, 200)");
    isDark = true;
  }
}

function setCSSVariable(variableName, newVariableValue) {
  document.documentElement.style.setProperty(variableName, newVariableValue);
}
