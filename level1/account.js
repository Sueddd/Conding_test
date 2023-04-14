export const BANK_LIST = {
  1: "성용은행",
  2: "사과은행",
  3: "코딩은행",
  4: "자바은행",
  5: "파이은행",
  6: "리엑은행",
  7: "자스은행",
  8: "모두은행",
};

export const ACCOUNT_FORM = {
  1: "00-00000000-00",
  2: "00-0000000-000",
  3: "00-000000-0000",
  4: "00-000-0000-000",
  5: "00-0000-000000",
  6: "00-000000000-0",
  7: "00-0000-000000",
  8: "00-00-00000000",
};

// let selectEl = document.querySelector("#selectEl");
// var objOption = document.createElement("option");
// objOption.text = selectEl.length + 1 + "번";
// objOption.value = selectEl.length + 1;
// selectEl.options.add(objOption);

// 1) 옵션 만들어주기 , createElement 이용
let select = document.querySelector("#bank-selector");
for (let i = 1; i < 9; i++) {
  let newOption = document.createElement("option");
  newOption.text = BANK_LIST[i];
  newOption.value = BANK_LIST[i];
  select.options.add(newOption);
}

// 2) 계좌 입력받고, 추가 가능하게 파싱하기
// - 파싱
// - 클릭하면 li추가

let input = document.querySelector("#account-input");
const button = document.getElementsByTagName("button");
console.log(button);
const ul = document.querySelector("#account-list");

// function onClick() {
//   const newLi = document.createElement("li");
//   newLi.innerHTML = input.value;
//   document.querySelector("#account-list").appendChild(newLi);
// }

button[0].addEventListener("click", (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerHTML = `${select.value} : ${input.value}`;
  document.querySelector("#account-list").appendChild(newLi);
});
