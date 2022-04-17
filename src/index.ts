import "./styles/index.css";

const app = (): HTMLElement => {
  const p = document.createElement("p");
  p.textContent = "This is a test";
  return p;
};

const main = () => {
  document.querySelector("#app").appendChild(app());
};

main();
