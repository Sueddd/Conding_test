// <!--
// 한 줄에 여러 개의 숫자가 입력되면,
// 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
// -->
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body></body>
//   <script>

//   </script>
// </html>
var number = "1 2 3 4 5 6";
var rev = number.split(" ");
var shi = rev.reverse();
for (let i = 0; i < shi.length; i++) {
  var result = Number(shi[i]);
}
console.log(result);
