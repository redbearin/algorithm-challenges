const determineWhoCursedTheMost = (fights) => {
  let sumMe = 0;
  let sumSpouse = 0;
  // go round by round through fights
  // add number of victories to sum by person
  for (round in fights) {
    sumMe += fights[round].me;
    sumSpouse += fights[round].spouse;
  }
  // report the outcome
  if (sumMe > sumSpouse)
    return 'ME!';
  if (sumMe < sumSpouse)
    return 'SPOUSE!'
  else
    return 'DRAW!'
};

const fights = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 44,
  },
  round3: {
    me: 10,
    spouse: 55,
  }
};

document.getElementById('ans').textContent = determineWhoCursedTheMost(fights);