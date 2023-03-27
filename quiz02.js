/*
010-1234-1234를 파라미터로 전달받아
010-****-1234로 파싱하는 함수를 정의 
*/

function ph(number) {
  const result = number.split("-");
  result.splice(1, 1, "****");
  const result2 = result.join();
  console.log(result2.replaceAll(",", "-"));
}

ph("010-1234-1234");
