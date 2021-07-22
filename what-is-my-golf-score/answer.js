const determineScore = (course, result) => {
  let score = 0;
  const termPts = {eagle: -2, birdie: -1, par: 0, bogey: 1, "double-bogey": 2}
  for (let i = 0; i < course.length; i++) {
    score += course[i] + termPts[result[i]];
  }
  return score;
}

course = [4, 4, 5, 3, 4, 4, 3, 5, 5, 3, 5, 4, 4, 4, 4, 3, 4, 4]

result = ["eagle", "bogey", "par", "bogey", "double-bogey", "birdie", "bogey", "par", "birdie", "par", "par", "par", "par", "par", "bogey", "eagle", "bogey", "par"];

document.getElementById('ans').textContent = determineScore(course, result);
