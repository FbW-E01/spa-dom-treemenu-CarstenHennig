// rm = document.getElementById("tree");

// rm.addEventListener("click", function (e) {
//   if (e.target.querySelector("li")) {
//     let list = e.target.closest("li");
//     list.remove();
//   }
//   true;
// });
const tree = document.getElementById("tree");
for (let li of tree.querySelectorAll("li")) {
  const span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}
tree.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() != "span") return;
  let childrenContainer = e.target.parentNode.querySelector("ul");
  childrenContainer.hidden = !childrenContainer.hidden;
});
