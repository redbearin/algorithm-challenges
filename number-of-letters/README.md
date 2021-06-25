Create a function that takes a sentence and returns the number of letters in this sentence sorted alphabetically.

Output format:
letter:count space letter:count (see examples).

Special cases:
space is NOT a letter!
special symbols like ($ & * @ ! ' @') is NOT a letter!
lower and upper letters IS EQUAL (A == a, B == b ... Z == z)!
Examples
charCount("Hello world!") ➞ "d:1 e:1 h:1 l:3 o:2 r:1 w:1"

charCount("Cheers, love! Hahaha.") ➞ "a:3 c:1 e:3 h:4 l:1 o:1 r:1 s:1 v:1"

charCount("Now, I learn JavaScript") ➞ "a:3 c:1 e:1 i:2 j:1 l:1 n:2 o:1 p:1 r:2 s:1 t:1 v:1 w:1"

Notes
Output should be in lowercase.