// 프로그래머스
// 코딩테스트 연습
// 2018 KAKAO BLIND RECRUITMENT
// [1차] 다트 게임

let dartScore = '1D2S#10S';

function solution(dartResult) {
  var answer = 0;

  // 인수로 들어온 문자열을 배열로 변환한다.
  let dartResultArray = dartResult.split('');
  console.log('array:', dartResultArray);
  let firstScore = 0;
  let secondScore = 0;
  let thirdScore = 0;
  //아래의 내용을 반복한다.
  for (let i = 0; i < dartResultArray.length; i += 1) {
    let isTypeNumber = (i) => Number.isInteger(parseInt(dartResultArray[i]));
    console.log('loopNo:', i, '------------------------------');
    console.log('isNumber:', isTypeNumber(i));
    // 배열의 인덱스별로 값을 숫자형태로 변환시키킨다. Number.parsInt()이때 변환된 값이 숫자일경우 조건문을 실행 시킨다.
    if (isTypeNumber(i)) {
      let currentValue = parseInt(dartResultArray[i]);
      if (isTypeNumber(i + 1)) {
        currentValue = parseInt(dartResultArray[i] + dartResultArray[i + 1]);
        i = i + 1;
        console.log('start:', currentValue);
      }

      if (dartResultArray[i + 1] === 'D') {
        console.log('isDoble:', dartResultArray[i + 1]);
        currentValue = Math.pow(currentValue, 2);
        console.log('doubleScore:', currentValue);
      } else if (dartResultArray[i + 1] === 'T') {
        console.log('isTriple:', dartResultArray[i + 1]);
        currentValue = Math.pow(currentValue, 3);
        console.log('tripleScore:', currentValue);
      } else {
        console.log('isSingle:', dartResultArray[i + 1]);
        currentValue = currentValue;
        console.log('singleScore:', currentValue);
      }

      if (i === 0) {
        firstScore = currentValue;
        if (dartResultArray[i + 2] === '*') {
          currentValue = currentValue * 2;
          console.log('plusOption:', currentValue);
        } else if (dartResultArray[i + 2] === '#') {
          currentValue = currentValue * -1;
          console.log('minusOption:', currentValue);
        }
        firstScore = currentValue;
        console.log('firstScore:', firstScore);
      } else if (i > 0 && i <= 3) {
        secondScore = currentValue;
        if (dartResultArray[i + 2] === '*') {
          firstScore = firstScore * 2;
          currentValue = currentValue * 2;

          console.log('plusOption:', currentValue);
        } else if (dartResultArray[i + 2] === '#') {
          currentValue = currentValue * -1;
          console.log('minusOption:', currentValue);
        }
        secondScore = currentValue;

        console.log('newFirstScore:', firstScore);
        console.log('secondScore:', secondScore);
      } else {
        thirdScore = currentValue;
        if (dartResultArray[i + 2] === '*') {
          secondScore = secondScore * 2;
          currentValue = currentValue * 2;
          console.log('plusOption:', currentValue);
        } else if (dartResultArray[i + 2] === '#') {
          currentValue = currentValue * -1;
          console.log('minusOption:', currentValue);
        }

        thirdScore = currentValue;

        console.log('newSecondScore:', secondScore);
        console.log('thirdScore:', thirdScore);
      }
    } else {
      continue;
    }
  }
  console.log(firstScore);
  console.log(secondScore);
  console.log(thirdScore);
  answer = firstScore + secondScore + thirdScore;
  console.log(answer);

  // 숫자로 판정된 다음 자리 배열값이 D, T 인지 확인한다. S는 그대로니 조건문에서제외. 이게아니면 다음 반복문실행.
  // D, T중에 하나면 해당 조건문실행
  // D 일경우 앞의 숫자를 *2, T면 *3. 아니면 그대로!

  // 숫자로 판정된 다음 다음 자리 배열값이 *, # 중하나인지 확인후 조건문 실행. *이면 직전점수와 해당점수를 2배로, #이면 현재점수를 뺀다 아니면 다음 반복문 실행

  return answer;
}
solution(dartScore);
