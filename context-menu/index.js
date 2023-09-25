let showContextMenu = false;
const contextMenuElement = document.getElementById("context-menu");
const copyButton = document.getElementById("copy-button");
let currentInnerText = "";

document.addEventListener("contextmenu", (pointerEvent) => {
  pointerEvent.preventDefault();
  currentInnerText = pointerEvent.target.innerText;
  showContextMenu = true;
  contextMenuElement.style.left = pointerEvent.pageX + "px";
  contextMenuElement.style.top = pointerEvent.pageY + "px";
  if (showContextMenu) {
    setCSSVariable("--transitionContextMenuOpacity", "none");
    setCSSVariable("--contextMenuOpacity", 1);
    setCSSVariable("--contextMenuDisplay", "inline-block");
    setCSSVariable("--transitionContextMenuOpacity", "opactiy 50ms");
  }
});
document.addEventListener("click", () => cancelContextMenu());
document.addEventListener("keydown", ({ key }) => {
  key === "Escape" && cancelContextMenu();
});
copyButton.addEventListener("click", () => {
  if (!currentInnerText) return;
  copyToUserClipboard(currentInnerText);
  currentInnerText = "";
});

function cancelContextMenu() {
  showContextMenu = false;
  if (!showContextMenu) {
    setCSSVariable("--transitionContextMenuOpacity", "opactiy 50ms");
    setCSSVariable("--contextMenuOpacity", "0");
    setCSSVariable("--contextMenuDisplay", "none");
    setCSSVariable("--transitionContextMenuOpacity", "none");
  }
  currentInnerText = "";
}

function setCSSVariable(variableName, newVariableValue) {
  document.documentElement.style.setProperty(variableName, newVariableValue);
}

function copyToUserClipboard(textToCopy) {
  navigator.clipboard.writeText(textToCopy);
}
