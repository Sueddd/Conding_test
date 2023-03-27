/*
우리 태양계를 이루는 행성은 
수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성
이 있습니다. 
이 행성들의 영어 이름은 
Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
입니다. 

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요
*/

const sun = {
  kor: ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"],
  en: [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ],
};

// console.log(sun.kor.indexOf("수성"));
function papago(kor_name) {
  const result = sun.kor.indexOf(kor_name);
  console.log(sun.en[result]);
}

papago("금성");
