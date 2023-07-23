import { data } from "./data.js";

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

function el(selector) {
  return document.querySelector(selector);
}

const container = el(".container");
const ul = el("ul");
const body = el("body");
const visualImg = el(".visual img");
const nickName = el(".nickName");

const setImage = (e) => {
  let li = e.target.closest("li");
  if (!li) return;

  const list = [...ul.children];
  const index = li.getAttribute("data-index");
  let dataIndex = data[index - 1];
  let name = dataIndex.name;
  let alt = dataIndex.alt;
  let colorA = dataIndex.color[0];
  let colorB = dataIndex.color[1];

  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");

  visualImg.setAttribute("src", `./assets/${name}.jpeg`);
  visualImg.setAttribute("alt", `${alt}`);

  setBgColor(colorA, colorB);

  setNameText(nickName, name);
};

const setBgColor = (colorA, colorB) => {
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
};

const setNameText = (target, name) => {
  target.textContent = name;
};

container.addEventListener("click", setImage);
