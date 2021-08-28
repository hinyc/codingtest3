// 프로그래머스
// 코딩테스트 연습
// 2018 KAKAO BLIND RECRUITMENT
// [1차] 다트 게임

function solution(dartResult) {
  var answer = 0;

  // 인수로 들어온 문자열을 배열로 변환한다.
  let dartResultArray = dartResult.split();

  let firstScore = 0;
  let secondScore = 0;
  //아래의 내용을 반복한다.
  for (i = 0; i < dartResultArray.length - 1; i += 1) {
    for (n = i + 1; n < dartResultArray.legth; n += 1) {
      // 배열의 인덱스별로 값을 숫자형태로 변환시키킨다. Number.parsInt()이때 변환된 값이 숫자일경우 조건문을 실행 시킨다.
      let isTypeNumber = (i) => Number.isInteger(parseInt(dartResultArray[i]));
      if (isTypeNumber(i)) {
        let currentValue = parseInt(dartResultArray[i]);

        if (dartResultArray[n] === "D") {
          currentValue = currentValue * 2;
        } else if (n === "T") {
          currentValue = currentValue * 3;
        }

        if (i === 0) {
          if (dartResultArray[n + 1] === "*") {
            currentValue = currentValue * 2;
          } else if (dartResultArray[n + 1] === "#") {
            currentValue = currentValue * -1;
          }
          firstScore = currentValue;
        } else if (i < 3) {
          if (dartResultArray[n + 1] === "*") {
            currentValue = firstScore * 2 + currentValue * 2;
          } else if (dartResultArray[n + 1] === "#") {
            currentValue = firstScore + currentValue * -1;
          }
          secondScore = currentValue;
        } else {
          if (dartResultArray[n + 1] === "*") {
            currentValue = secondScore * 2 + currentValue * 2;
          } else if (dartResultArray[n + 1] === "#") {
            currentValue = currentValue * -1;
          }
        }
      } else {
        continue;
      }
    }
  }

  // 숫자로 판정된 다음 자리 배열값이 D, T 인지 확인한다. S는 그대로니 조건문에서제외. 이게아니면 다음 반복문실행.
  // D, T중에 하나면 해당 조건문실행
  // D 일경우 앞의 숫자를 *2, T면 *3. 아니면 그대로!

  // 숫자로 판정된 다음 다음 자리 배열값이 *, # 중하나인지 확인후 조건문 실행. *이면 직전점수와 해당점수를 2배로, #이면 현재점수를 뺀다 아니면 다음 반복문 실행

  return answer;
}
