/**
 * Consists of three classes namely:
 * Intl.NumberFormat, Intl.DateTimeFormat and Intl.Collator
 */
//Intl.NumberFormat
let data = [40, 7, 89.98372]
let currVal = Intl.NumberFormat("en", {
    style: "currency", //can be either currency, percent or decimal
    //the following two properties only apply if the style is currency
    currency: "kes",
    currencyDisplay: "name", //either code, name or symbol. eg. code - USD, name - US dollar, symbol- $.
    useGrouping: true,//set the symbol to show if the number should have a thousand separator or not.
    minimumIntegerDigits: 2,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}).format;

//formatting values to percentage
const toPercent = [0.78, 0.189, 1];
let percentVal = Intl.NumberFormat(undefined, {
    style: "percent",
    useGrouping: false,
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
}).format;
console.log(`currVal(30): ${currVal(30)}`);
console.log(`data.map(currVal): ${data.map(currVal)}`);
console.log(`toPercent.map(percentVal): ${toPercent.map(percentVal)}`)
export let mapped = data.map(currVal);


//date formatting
let dateFormat = Intl.DateTimeFormat("en",
    {
        year: '2-digit',//takes either numeric or 2-digit
        month: 'long',//use numeric, narrow, long or short. eg. numeric-01,03,etc., long-January, etc, short-eg. Jan,Apr,etc, narrow-(only one uppercase letter) J, F, M.
        day: 'numeric',//use either numeric or 2-digit
        weekday: 'long',//use long, short or narrow
        hour: '2-digit',//use numeric or 2-digit for the three properties
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Pacific/Honolulu',
        timeZoneName: 'long',//take long for full-length, short for numeric
        hour12: false,//specifies whether to us 12-hr time or not
        hourCycle: 'h24',//specifies whether midnight is written as h11-midnight is 0 and hour before is 11pm,h12-midnight is 12 or h23- midnight is
        // 0 and hour before is 23, h24-midnight is 24hours.
    }).format;
console.log(dateFormat(new Date("2020-01-02T13:14:15Z")));

//Comparing strings
let opts = {
    //usage property takes value as either "sort" or "search". The idea is that, when sorting strings,
    //you typically want a collator that differentiates as many strings as possible to
    // produce a reliable ordering. But when comparing two strings, some locales may want
    //a less strict comparison that ignores accents
    usage: 'sort',
    /*The property sensitivity  specifies whether the collator is sensitive to letter case and accents
when comparing strings. The value "base" causes comparisons that ignore case
and accents, considering only the base letter for each character. (Note, however,
that some languages consider certain accented characters to be distinct base letters.)
"accent" considers accents in comparisons but ignores case. "case" considers case and ignores accents.
And "variant" performs strict comparisons that consider both case and accents. The default value for this property is "variant"
when usage is "sort". If usage is "search", then the default sensitivity depends on the locale.*/
    sensitivity: 'variant',
    /*
    Set the ignorePunctuation property below to true to ignore spaces and punctuation when comparing
strings. With this property set to true, the strings “any one” and “anyone”, for
example, will be considered equal
     */
    ignorePunctuation: true,
    /*
    Set the numeric property below to true if the strings you are comparing are integers or contain
integers, and you want them to be sorted into numerical order instead of
alphabetical order. With this option set, the string “Version 9” will be sorted before
“Version 10”, for example
     */
    numeric: true,
    /*
    The caseFirst property specifies which letter case should come first. If you specify
"upper", then “A” will sort before “a”. And if you specify "lower", then “a” will
sort before “A”. In either case, note that the upper- and lowercase variants of the
same letter will be next to one another in sort order, which is different from Uni‐
code lexicographic ordering (the default behavior of the Array sort() method)
in which all ASCII uppercase letters come before all ASCII lowercase letters. The
default for this property is locale dependent, and implementations may ignore
this property and not allow you to override the case sort order
     */
    caseFirst: 'upper'
}

/**
 * Once you have created an Intl.Collator object for the desired locale and options, you
 * can use its compare() method to compare two strings. This method returns a num‐
 * ber. If the returned value is less than zero, then the first string comes before the sec‐
 * ond string. If it is greater than zero, then the first string comes after the second string.
 * And if compare() returns zero, then the two strings are equal as far as this collator is concerned.
 */

// A basic comparator for sorting in the user's locale.
// Never sort human-readable strings without passing something like this:
const collator = new Intl.Collator().compare;
console.log(["z", "A", "Z", "a"].sort(collator));

//sort filenames
const fileName = new Intl.Collator(undefined, {
    numeric : true,
}).compare;
console.log(["Article 17", "Article 12", "Article 1"].sort(fileName));

// Find all strings that loosely match a target string
const fuzzyMatcher = new Intl.Collator(undefined, {
    sensitivity: "base",
    ignorePunctuation: true
}).compare;
let strings = ["Foolish","Føø Bar","food", "fool",];
console.log(strings.findIndex(s => fuzzyMatcher(s, "foobar") === 0));

//check a password for a matching username string
const passChecker = new Intl.Collator(undefined, {
    ignorePunctuation : true,
    sensitivity : "base"
}).compare;
const arrPassValues = ["charlie", "char low","chÄr les"];
console.log(arrPassValues.findIndex(value => passChecker(value, "Charles") === 0));

