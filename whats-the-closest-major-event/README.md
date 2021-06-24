Given an array of objects containing some of the major historical events and a date object, you should return the name of the historical event that is closest to that date.

An historical event object contains 2 properties, this is an example:

{
  date: '2005-08-23',
  name: 'Hurricane Katrina'
}
⚠️ You can see the full array in the Tests tab.

Examples
closestEvent(events, new Date(1990, 0, 1)) ➞ Fall of the Berlin Wall

closestEvent(events, new Date(2005, 0, 1)) ➞ Indian Ocean Earthquake and Tsunami Disaster

closestEvent(events, new Date()) ➞ Fukushima Nuclear Disaster
Notes
N/A