//1S2D*3T
function solution(dartResult) {
  var answer = 0;
  let scoreArray = dartResult.split("");

  //점수는 1~10 ,보너스 점수 ^ S,D,T
  //옵션은 *= 직전점수와 해당점수 2배, # 해당점수 - ""
  //점수 보너스 옵션

  let beforeScore = 0;
  for (let i = 0; i < scoreArray.length; i += 1) {
    // console.log(i, parseInt(scoreArray[i]));
    // console.log(`${i}-2`, typeof parseInt(scoreArray[i]) === "number");
    console.log("### i :", i);
    console.log(scoreArray[i]);
    console.log("1.befoerScore", beforeScore);
    if (typeof parseInt(scoreArray[i]) === "number") {
      // console.log("blooean1", typeof parseInt(scoreArray[i]) === "number");
      console.log(typeof parseInt(scoreArray[i]) === "number");
      console.log(`2.!!!!!loopNo.${i}:`, answer);

      let score = parseInt(scoreArray[i]);
      console.log("2-2", score);
      if (scoreArray[i + 1] === "D") {
        score = Math.pow(score, 2);
        console.log("3.if-1", score);
      } else if (scoreArray[i + 1] === "T") {
        score = Math.pow(score, 3);
        console.log("4.if-2", score);
      }

      if (scoreArray[i + 2] === "*") {
        score = beforeScore * 2 + score * 2;
        console.log("5.if-3", score);
      } else if (scoreArray[i + 2] === "#") {
        score = beforeScore - score;
        console.log("6.if-4", score);
      }
      beforeScore = score;
      console.log("6-1 beforScore", beforeScore);
      answer = answer + score;
      console.log("7. answer", answer);
    } else {
      continue;
    }
  }
  console.log("8.lastAnswer", answer);
}

solution("2T#2D*3T");
