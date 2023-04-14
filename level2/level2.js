import { RESERVATION_LIST } from "./reservation.js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/

// 조건은 두가지, 이름과 번호 모두 일치해야 한다.
// user-name 이라는 name을 가진 input안의 value,
// user-phone 이라는 name을 가진 input안의 value

// 버튼을 누르면 div 추가

const button = document.getElementsByTagName("button");
console.log(button);
const user_name = joinForm.user_name;
const user_phone = joinForm.user_phone;

button[0].addEventListener("click", (e) => {
  e.preventDefault();
  const newDiv = document.createElement("div");

  for (let i = 0; i < RESERVATION_LIST.length; i++) {
    if (user_name.value == RESERVATION_LIST[i].name) {
      for (let j = 0; j < RESERVATION_LIST.length; j++) {
        if (user_phone.value == RESERVATION_LIST[j].phone) {
          //   console.log(RESERVATION_LIST[j].number);
          newDiv.innerHTML = RESERVATION_LIST[j].number;
          document.body.appendChild(newDiv);
        } else {
          alert("일치하는 항목이 없습니다");
          newDiv.innerHTML = "일치하는 항목이 없습니다";
          document.body.appendChild(newDiv);
        }
        return;
      }
    } else {
      alert("일치하는 항목이 없습니다");
      newDiv.innerHTML = "일치하는 항목이 없습니다";
      document.body.appendChild(newDiv);
    }
    return;
  }
});
