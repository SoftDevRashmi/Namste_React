/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to Namaste React"
);

console.log(heading);*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am in H1"),
    React.createElement("h2", { id: " h2" }, "I am in H2"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
