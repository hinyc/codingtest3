// 프로그래머스
// 코딩테스트 연습
// 2018 KAKAO BLIND RECRUITMENT
// [1차] 다트 게임

let dartScore = '1S*2T*3S';

function solution(dartResult) {
  var answer = 0;
  let dartResultArray = dartResult.split('');
  let scoreArray = [];
  let firstScore = 0;
  let secondScore = 0;
  let thirdScore = 0;
  for (let i = 0; i < dartResultArray.length; i += 1) {
    let isTypeNumber = (i) => Number.isInteger(parseInt(dartResultArray[i]));
    console.log(isTypeNumber(i), '---------------------------');
    if (isTypeNumber(i)) {
      if (isTypeNumber(i + 1)) {
        scoreArray.push(parseInt(dartResultArray[i] + dartResultArray[i + 1]));
        i = i + 1;
      } else if (isTypeNumber(i)) {
        scoreArray.push(parseInt(dartResultArray[i]));
      }

      if (dartResultArray[i + 1] === 'S') {
        scoreArray.push(1);
      } else if (dartResultArray[i + 1] === 'D') {
        scoreArray.push(2);
      } else if (dartResultArray[i + 1] === 'T') {
        scoreArray.push(3);
      }

      if (dartResultArray[i + 2] === '*') {
        scoreArray.push(2);
      } else if (dartResultArray[i + 2] === '#') {
        scoreArray.push(-1);
      } else {
        scoreArray.push(1);
      }
      console.log(scoreArray);
    } else {
      continue;
    }
  }

  firstScore = Math.pow(scoreArray[0], scoreArray[1]) * scoreArray[2];
  if (scoreArray[5] === 2) {
    firstScore = Math.pow(scoreArray[0], scoreArray[1]) * scoreArray[2] * scoreArray[5];
    secondScore = Math.pow(scoreArray[3], scoreArray[4]) * scoreArray[5];
  } else {
    secondScore = Math.pow(scoreArray[3], scoreArray[4]) * scoreArray[5];
  }
  if (scoreArray[8] === 2) {
    secondScore = Math.pow(scoreArray[3], scoreArray[4]) * scoreArray[5] * scoreArray[8];
    thirdScore = Math.pow(scoreArray[6], scoreArray[7]) * scoreArray[8];
  } else {
    thirdScore = Math.pow(scoreArray[6], scoreArray[7]) * scoreArray[8];
  }
  answer = firstScore + secondScore + thirdScore;
  console.log('firstScore:', firstScore);
  console.log('secondScore:', secondScore);
  console.log('thirdScore:', thirdScore);
  return answer;
}

solution(dartScore);
console.log('answer:', solution(dartScore));
