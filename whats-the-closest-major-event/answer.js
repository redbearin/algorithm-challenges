const closestEvent = (events, selectedDate) => {
  // set closestDiff to the difference
  // between selectedDate and date of thte event at
  // the 0 index of the events array
  let closestDiff = Math.abs(selectedDate - new Date (events[0].date));
  // set closestName to name of event at the 0 index
  // of thte events array
  let closestName = events[0].name;
  let diffTime, evDate;
  // go through events array element by element
  // reassign closestDiff and closestName based on
  // distance.
  for (let i = 1; i < events.length; i++) {
    evDate = new Date (events[i].date)
    diffTime = Math.abs(selectedDate - evDate);
    if (diffTime < closestDiff) {
      closestDiff = diffTime;
      closestName = events[i].name;
    }
  }
  return closestName;
}

const events = [
  { date: '2005-08-23', name: 'Hurricane Katrina' },
  { date: '2004-12-26', name: 'Indian Ocean Earthquake and Tsunami Disaster' },
  { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
  { date: '2009-01-15', name: 'Hudson River Plane Crash' },
  { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
  { date: '2001-09-11', name: 'September 11 Attacks' },
  { date: '1986-04-26', name: 'Chernobyl Nuclear Disaster' },
  { date: '2011-03-16', name: 'Fukushima Nuclear Disaster' }
];

const selectedDate = new Date();

document.getElementById('ans').textContent = closestEvent(events, selectedDate);