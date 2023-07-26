/*
 Character classes

Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits.

Lists;
[xyz], [a-e]. [0-5] : Matches one of the characters inside. A hyphen creates a range

[^xyz], [^1-5] : Negated/complemented. Matches anything not in the brackets

/.x/ : the dot character matches any character except line terminators. eg. /.y/ matches 'my' and 'ay' but not 'yes' in 'yes make my day' since it lacks a character infront of it. In character classes, it loses it's special meaning and matches the literal dot.
Note that the 'm' multiline flag doesn't change the dot behavior. So to match a pattern across multiple lines, the character class [^] can be used — it will match any character including newlines.
The s "dotAll" flag allows the dot to also match line terminators.

\d : Matches any digit

\D : Matches any character not a digit

\w : Matches any alphanumeric character from the basic Latin alphabet, including the underscore

\W : Matches any character that is not a word character from the basic Latin alphabet

\s : Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces. Equivalent to [\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]

\S : Matches a single character other than whitespace

\t	Matches a horizontal tab.

\r	Matches a carriage return.

\n	Matches a linefeed.

\v	Matches a vertical tab.

\f	Matches a form-feed.

[\b]	Matches a backspace. If you're looking for the word-boundary character (\b), see Assertions.

\0	Matches a NUL character. Do not follow this with another digit.
\cX	
Matches a control character using caret notation, where "X" is a letter from A–Z (corresponding to code points U+0001–U+001A). For example, /\cM\cJ/ matches "\r\n".

\xhh	Matches the character with the code hh (two hexadecimal digits).

\uhhhh	Matches a UTF-16 code-unit with the value hhhh (four hexadecimal digits).

\u{hhhh} or \u{hhhhh}	(Only when the u flag is set.) Matches the character with the Unicode value U+hhhh or U+hhhhh (hexadecimal digits).

\p{UnicodeProperty}, \P{UnicodeProperty}	Matches a character based on its Unicode character properties (to match just, for example, emoji characters, or Japanese katakana characters, or Chinese/Japanese Han/Kanji characters, etc.).

\ : Indicates that the following character should be treated specially, or "escaped". It behaves one of two ways.

For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally. For example, /b/ matches the character "b". By placing a backslash in front of "b", that is by using /\b/, the character becomes special to mean match a word boundary.
For characters that are usually treated specially, indicates that the next character is not special and should be interpreted literally. For example, "*" is a special character that means 0 or more occurrences of the preceding character should be matched; for example, new Regexp("a*") means match 0 or more "a"s. To match * literally, precede it with a backslash; for example, new Regexp("a\*") matches "a*".
Note: To match this character literally, escape it with itself. In other words to search for \ use /\\/.

x|y : Disjunction: Matches either "x" or "y". Each component, separated by a pipe (|), is called an alternative. For example, /green|red/ matches "green" in "green apple" and "red" in "red apple".
Note: A disjunction is another way to specify "a set of choices", but it's not a character class. Disjunctions are not atoms — you need to use a group to make it part of a bigger pattern. [abc] is functionally equivalent to (?:a|b|c).
*/

const randomData = "015 354 8787 687351 3512 8735";

//get numbers with atleast 4 digits
const atLeastFourDigits = /\b\d{4,}\b/g;
console.table(randomData.match(atLeastFourDigits));

//get words starting with a specific character
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const getStartingWithA = /\b[aA]\w+/g;
console.table(aliceExcerpt.match(getStartingWithA));

//looking for a word from unicode characters
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-u0019\u0021-uFFFF])+/gu; //space is u0020
console.table(nonEnglishText.match(regexpBMPWord));

//count the number of vowels in a sentence
const vowels = /[aeiouAEIOU]/g;
console.log("The number of vowels is: " + aliceExcerpt.match(vowels).length);
