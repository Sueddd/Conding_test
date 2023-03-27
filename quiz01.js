/*
자판기라는 함수를 정의

자판기 함수는 처음에 실행되었을 때 자판기가 가동되었습니다. 출력
자판기 함수의 파라미터로는 coin, menu

자판기 함수의 반환값은 

잔돈이 0원이면 음료수 이름을 반환 - 예외
잔돈이 있으면 음료수 이름과 잔돈을 반환
음료수보다 금액이 적을 경우 금액이 부족합니다 반환 - 예외 
없는 메뉴를 파라미터로 전달하였을 때는 존재하지 않는 상품입니다. 반환

메뉴 
솔의눈 : 300원
비타500 : 500원
콜라 : 1000원
*/

let drink = {
  name: ["sol", "la", "si"],
  price: [300, 500, 1000],
};

// console.log(drink.name[0]);
// const num = drink.name.indexOf("sol");
// console.log(drink.price[num]);

function juice(coin, menu) {
  console.log("자판기가 가동되었습니다.");
  const num = drink.name.indexOf(menu);
  const money = drink.price[num];
  if ((menu != drink.name[0]) | drink.name[1] | drink.name[2]) {
    return console.log("존재하지 않는 상품입니다");
  }
  if (coin == 0) {
    return console.log(menu);
  } else if (coin < money) {
    return console.log("금액이 부족합니다");
  } else {
    return console.log(`${menu}, ${coin - money}`);
  }
}

juice(300, "sol");
