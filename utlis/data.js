const usernames = [
    "catpriority",
    "butterminstrel",
    "vagabondpaddle",
    "bitesizedjackyard",
    "chopsticksarise",
    "ringedermine",
    "pitchfunding",
    "postulaterabid",
    "agreementdeer",
    "sinfulfanny",
    "hotelultimate",
    "wealthsecond",
    "shoalfade",
    "peartotem",
    "alarmedactual",
    "pickyunwilling",
    "politicaltights",
    "taleaggravated",
    "kneelsoak",
    "greensorgan",
    "lotusartificial",
    "increasingtoga",
    "abrasiveduring",
    "hiveshads",
    "silentmarmite",
    "dataaromatic",
    "woozyhalibut",
];

const thoughts = [
    "Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.",
    "'Go to bed, you'll feel better in the morning' is the human version of 'Did you turn it off and turn it back on again?'",
    "Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume",
    "Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can't get a clear shot of a robber standing still.",
    "If my calculator had a history, it would be more embarrassing than my browser history.",
    "Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.",
    "As a kid my parents taught me to not believe everything I see on TV, now I have to teach them to not believe everything they see on Facebook."
]


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//Get random item in Usernames array
const getRandomUser = () => `${getRandomArrItem(usernames)}`;

//get random item in thoughts array
const getRandomThought = () => `${getRandomArrItem(thoughts)}`;

module.exports = { getRandomUser, getRandomThought };