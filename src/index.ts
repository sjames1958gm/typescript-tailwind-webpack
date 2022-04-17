import "./styles/index.css";

const p = (
  attrs: any,
  ...children: [HTMLElement | string]
): HTMLParagraphElement => {
  const p = document.createElement("p");
  children.forEach((c) => {
    if (typeof c === "string") {
      p.textContent = c;
    } else {
      p.appendChild(c);
    }
  });
  return p;
};

const app = (): HTMLElement => {
  return p("", "this is a test");
};

const main = () => {
  document.querySelector("#app").appendChild(app());
};

main();
