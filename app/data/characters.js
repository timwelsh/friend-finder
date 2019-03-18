// Each of these objects should roughly follow the format below.

// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// Use
// Total Difference: 2 + 1 + 2 = 5

// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.
const friendData = [
    {
        name: "Hamlet",
        photo: "http://i.huffpost.com/gen/1221096/thumbs/o-KENNETH-BRANAUGH-HAMLET-facebook.jpg",
        scores: [1, 1, 4, 4, 5, 1, 1],
        desc: "A tremendously complex person: thoughtful, complex, indecisive, impulsive, careless, melancholy, and more, all at once."
    },
    {
        name: "Coriolanus",
        photo: "https://www.bucknell.edu/images/Depts/2016News/January/NTLiveCoriolanus800x600.jpg",
        scores: [4, 5, 4, 3, 3, 2, 5],
        desc: "An impressive figure who's sometimes too stubborn and proud. You also have a domineering mother. Let's hope you don't end up brutally killed by a group of Roman conspirators."
    },
    {
        name: "Viola from Twelfth Night",
        photo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Viola_and_the_Countess_-_Frederick_Richard_Pickersgill.jpg",
        scores: [2, 1, 3, 2, 4, 4, 4],
        desc: "A female with an infectious energy, funny, clever, and cunning."
    },
    {
        name: "Sir John Falstaff",
        photo: "https://stephenbasdeodotorg.files.wordpress.com/2016/01/falstaff.jpg?w=1200",
        scores: [3, 2, 5, 2, 4, 3, 2],
        desc: "A bit vain and maybe even a little cowardly, but more importantly the person everyone wants at their party."
    },
    {
        name: "Beatrice from Much Ado About Nothing",
        photo: "https://mtbifiction.files.wordpress.com/2014/11/0340899_11839_mc_tx3601.jpg?w=665&h=360",
        scores: [5, 4, 1, 5, 2, 5, 3],
        desc: "Wise, funny, willing to risk everything, and at times genuinely to be feared. Everyone LOVES you!"
        },
    {
        name: "Othello",
        photo: "https://i2.wp.com/www.youthvoices.live/wp-content/uploads/2017/04/151110_CBOX_Othello-lawrence-fishburne.jpg.CROP_.promo-xlarge2.jpg?fit=480%2C343&ssl=1",
        scores: [3, 4, 1, 5, 2, 3, 1],
        desc: "A tragic life filled with disabling resentment mixed with excessive devotion."
    },
    {
        name: "Lady Macbeth",
        photo: "http://www.robertmitchellevans.com/wp-content/uploads/2011/01/Lady-Macbeth.jpg",
        scores: [3, 4, 2, 5, 5, 2, 4],
        desc: "Enjoys psycho-sexual realtionships, proud manipulator with a demonic heart"
    },
    {
        name: "Titania",
        photo: "http://landoflegendslv.com/03ports/mystsofavalon/00images/Faeries/Titania_Frederick_Howard_Michael_1896.JPG",
        scores: [1, 2, 3, 4, 5, 1, 2],
        desc: "She falls in love with an ass's head"
    },
    {
        name: "King Lear",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/KingLear.jpg/800px-KingLear.jpg",
        scores: [5, 1, 4, 4, 5, 1, 2],
        desc: "Divides kingdom in half, is rejected by his daughters, run mad and dies."
    }

];      

  module.exports = friendData;
  