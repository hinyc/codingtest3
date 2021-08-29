// 프로그래머스
// 코딩테스트 연습
// 2018 KAKAO BLIND RECRUITMENT
// [1차] 다트 게임

//1S2D*3T
function solution(dartResult) {
  var answer = 0;
  let scoreArray = dartResult.split('');

  //점수는 1~10 ,보너스 점수 ^ S,D,T
  //옵션은 *= 직전점수와 해당점수 2배, # 해당점수 - ""
  //점수 보너스 옵션

  let beforeScore = 0;
  for (let i = 0; i < scoreArray.length; i += 1) {
    console.log('-----------------------');
    console.log('beforeScore:', beforeScore);
    console.log('index:', i, scoreArray[i]);
    // console.log(`${i}-2`, typeof parseInt(scoreArray[i]) === "number");
    console.log('boolean:', Number.isInteger(parseInt(scoreArray[i])));
    if (Number.isInteger(parseInt(scoreArray[i]))) {
      // console.log("blooean1", typeof parseInt(scoreArray[i]) === "number");
      // 왜 true냐 !!!!!!!

      let score = parseInt(scoreArray[i]);

      console.log('2-2', score);
      if (scoreArray[i + 1] === 'D') {
        score = Math.pow(score, 2);
        console.log('3.if-1', score);
      } else if (scoreArray[i + 1] === 'T') {
        score = Math.pow(score, 3);
        console.log('4.if-2', score);
      }

      if (scoreArray[i + 2] === '*') {
        score = score * 2;
        beforeScore = beforeScore * 2;
        console.log('5.if-3', score);
      } else if (scoreArray[i + 2] === '#') {
        score = -score;
        console.log('6.if-4', score);
      }
      beforeScore = score;
      console.log('answer:', answer);
      console.log('thisScore:', beforeScore);
      answer = answer + score;
      console.log('7. answer', answer);
    } else {
      continue;
    }
  }
  console.log('8.lastAnswer', answer);
}

solution('1S2D*3T');
// 1D2S#10S
// 1S2D*3T
