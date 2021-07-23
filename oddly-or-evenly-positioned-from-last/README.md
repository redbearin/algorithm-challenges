Create a function that extracts the characters from an array (or a string) on odd or even positions, depending on the specifier. The string "odd" for items on odd positions (... 5, 3, 1) and "even" for even positions (... 6, 4, 2) from the last item of that array or string.

Examples
charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
// 4 & 8 occupy the 4th & 2nd positions from right.

charAtPos("EDABIT", "odd") ➞ "DBT"
// "D", "B" and "T" occupy the 5th, 3rd and 1st positions from right.

charAtPos([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "odd") ➞ ["(", "&", "%", "#", "!"]

Notes
Arrays are zero-indexed, so, index+1 = position or position-1 = index.
An easier version of this challenge can be found via this link.
A recursive version of this challenge can be found via this link.