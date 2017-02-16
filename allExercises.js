///////////////////////////////////////////////////////////////////////////////
//Array Access----------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////

var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

console.log(books[0]);
console.log(books[2]);

// The Hobbit
// The Universe in a Nutshell


var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"];

songs.forEach(function(element) {
    console.log(element);
});

// Call Me Maybe
// Pacabel's Cannon in D
// Smells Like Teen Spirit


var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"];
var riders = ["Kelly", "Steve", "Georgio", "Fabio"];

for (var i = 0; i < riders.length; i++) {
    console.log(riders[i] + " drives a " + cars[i]);
}

// Kelly drives a Chevy Tahoe
// Steve drives a Ford Fiesta
// Georgio drives a Toyota Yaris
// Fabio drives a Honda Fit

///////////////////////////////////////////////////////////////////////////////
//Nested Array Access----------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////

var trilogies = [
    ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
    ["The Empire Strikes Back", "Return of the Jedi", "A New Hope"],
    ["Back to the Future", "Back to the Future II", "Back to the Future III"],
    ["The Hunger Games", "Catching Fire", "Mockingjay"],
    ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
    ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish", "Mostly Harmless", "And Another Thing..."]
];


console.log("Print all the movies");
console.log("");
for (var i = 0; i < trilogies.length; i++) {
    var arr = trilogies[i];

    for (var a = 0; a < arr.length; a++) {
        console.log(arr[a]);
    }
}

// The Fellowship of the Ring
// The Two Towers
// The Return of the King
// The Empire Strikes Back
// Return of the Jedi
// A New Hope
// Back to the Future
// Back to the Future II
// Back to the Future III
// The Hunger Games
// Catching Fire
// Mockingjay
// The Matrix
// The Matrix Reloaded
// The Matrix Revolutions
// Harry Potter and the Sorcerer's Stone
// Harry Potter and the Chamber of Secrets
// Harry Potter and the Prisoner of Askaban
// Harry Potter and the Goblet of Fire
// Harry Potter and the Half Blood Prince
// Harry Potter and the Order of the Phoenix
// Harry Potter and the Deathly Hollows
// The Hitchhiker's Guide to the Galaxy
// The Restaurant at the End of the Universe
// Life, the Universe and Everything
// So Long, and Thanks for All the Fish
// Mostly Harmless
// And Another Thing...

console.log("Print the last of the trilogies");
console.log("");
for (var i = 0; i < trilogies.length; i++) {
    var arr = trilogies[i];
    console.log(arr[arr.length - 1]);
}

// The Return of the King
// A New Hope
// Back to the Future III
// Mockingjay
// The Matrix Revolutions
// Harry Potter and the Deathly Hollows
// And Another Thing...

console.log("Print the first of the trilogies");
console.log("");
for (var i = 0; i < trilogies.length; i++) {
    var arr = trilogies[i];
    console.log(arr[0]);
}

// The Fellowship of the Ring
// The Empire Strikes Back
// Back to the Future
// The Hunger Games
// The Matrix
// Harry Potter and the Sorcerer's Stone
// The Hitchhiker's Guide to the Galaxy



console.log("--------------------------------------------------");
console.log("");
console.log("Print the odd numbered movies");
console.log("");
for (var i = 0; i < trilogies.length; i++) {
    var singleTrilogy = trilogies[i];

    for (var a = 0; a < singleTrilogy.length; a++) {
        if (a % 2 === 0) {
            console.log(singleTrilogy[a]);
        }
    }
}

// The Fellowship of the Ring
// The Return of the King
// The Empire Strikes Back
// A New Hope
// Back to the Future
// Back to the Future III
// The Hunger Games
// Mockingjay
// The Matrix
// The Matrix Revolutions
// Harry Potter and the Sorcerer's Stone
// Harry Potter and the Prisoner of Askaban
// Harry Potter and the Half Blood Prince
// Harry Potter and the Deathly Hollows
// The Hitchhiker's Guide to the Galaxy
// Life, the Universe and Everything
// Mostly Harmless

///////////////////////////////////////////////////////////////////////////////
//-------------------------------------------Object Access
///////////////////////////////////////////////////////////////////////////////

var user = {
    name: "Jenny Appleseed",
    phone: "555-656-2323",
    email: "j.appleseed@appleseedanddaughters.com",
    address: "123 Main street, anytown USA"
}

var user2 = {
    name: "Kerri Appleseed",
    phone: "555-456-3344",
    email: "k.appleseed@appleseedanddaughters.com",
    address: "123 main street, anytown USA"
}

var user3 = {
    name: "Sally Appleseed",
    phone: "555-34-663",
    email: "s.appleseed@appleseedanddaughters.com",
    address: "123 main street, anytown USA"
}

//return true if the email address contains an "@" symbol.
validateEmail(user);

//return true if the email address contains an "@" symbol.
function validateEmail(objectName) {

    if (objectName.email.indexOf("@") !== -1) {
        console.log("email contains @");
        return true;
    }
    return false;
}

validatePhone(user);

//return true if the phone number is valid (###-###-####).
function validatePhone(objectName) {
    var splitPhone = objectName.phone.split("");
    var dashLocations = [];

    for (let i = 0; i < splitPhone.length; i++) {
        if (splitPhone[i] !== "-") {
            continue;
        } else {
            dashLocations.push(i);
        }
    }

    if (dashLocations.length === 2 && dashLocations[0] === 3 && dashLocations[1] === 7) {
        console.log("returning true");
        return true;
    }
    return false;
}

///////////////////////////////////////////////////////////////////////
//return true if the user has a first and last name.

validateName(user);

function validateName(objectName) {
    var splitName = objectName.name.split(" ");

    if (splitName.length === 2) {
        console.log("Returning True");
        return true;
    }
    return false;
}

///////////////////////////////////////////////////////////////////////////////
//-------------------------------------------Nested Object Access
///////////////////////////////////////////////////////////////////////////////

var library = {
    city: "San Francisco",
    name: "SF Public",
    bestBook: {
        title: "JavaScript for Dummies",
        company: {
            name: "BookCo",
            employees: {
                writers: [{
                    firstName: "Bob",
                    lastName: "Marley",
                }],
                publisher: {
                    firstName: "Fred",
                    lastName: "Bambam"
                }
            }
        }
    }
};

// The city of the library
//
console.log(library.city);

// The name of the library
//
console.log(library.name);

// The bestBook in the library
//
console.log(library.bestBook.title);

// The title of the bestBook in the library
//
console.log(library.bestBook.title);

// The company of the bestBook in the library
//
console.log(library.bestBook.company.name);
// The publisher of the company of the bestBook in the library
console.log(library.bestBook.company.employees.publisher.firstName + " " + library.bestBook.company.employees.publisher.lastName);


///////////////////////////////////////////////////////////////////////////////
//-------------------------------------------Arrays in Objects
///////////////////////////////////////////////////////////////////////////////

var cremeBrulee = {
    ingredients: [
        "eggs",
        "heavy cream",
        "vanilla pods"
    ],
    cookware: [
        "mixing bowl",
        "whisk",
        "ramekins",
        "oven",
        "measuring cups"
    ]
};

//Returns our Crème Brûlée's ingredients:
console.log(cremeBrulee.ingredients);

//Returns our Crème Brûlée's cookwares:
console.log(cremeBrulee.cookware);

//Returns the first item in our Crème Brûlée's ingredients:
console.log(cremeBrulee.ingredients[0]);

//Returns the third item in our Crème Brûlée's cookwares:
console.log(cremeBrulee.cookware[2]);

//Adds sugar to our Crème Brûlée's ingredients:
cremeBrulee.ingredients.push("sugar");
console.log(cremeBrulee.ingredients);

//Change "eggs" in our Crème Brûlée's ingredients to "egg yolks":
for (let i = 0; i < cremeBrulee.ingredients.length; i++) {
    if (cremeBrulee.ingredients[i] === "eggs") {
        cremeBrulee.ingredients[i] = "egg yolks";
    }
}
console.log(cremeBrulee.ingredients);



///////////////////////////////////////////////////////////////////////////////
//-------------------------------------------Objects In Arrays In Objects
///////////////////////////////////////////////////////////////////////////////

var postOne = {
    user: "Tammy",
    message: "I did it!"
};
var postTwo = {
    user: "Tom",
    message: "seriously?"
};
var postThree = {
    user: "Zorro",
    message: "why don't people just get it!"
};
var postFour = {
    user: "Jorge",
    message: "good day today"
};
var postFive = {
    user: "Victoria",
    message: "yay!"
};
var postSix = {
    user: "Bobo",
    message: "Last night was the most amazing afternoon"
};

//Create an array called posts and add the above posts to it.
var postsArray = [];
postsArray.push(postOne, postTwo, postThree, postFour, postFive, postSix);
console.log(postsArray);

//Prints out all messages.
for (let i = 0; i < postsArray.length; i++) {
    console.log(postsArray[i].message);
}

//Prints out all users.
for (let i = 0; i < postsArray.length; i++) {
    console.log(postsArray[i].user);
}

//Prints out every odd indexed post in the array.
for (let i = 0; i < postsArray.length; i++) {
    if (i % 2 === 0)
        console.log(postsArray[i].message);
}

//Update user Bobo's message to have an ! at the end of it.
for (let i = 0; i < postsArray.length; i++) {
    if (postsArray[i].user === "Bobo") {
        postsArray[i].message += postsArray[i].message + "!";
        console.log(postsArray[i].message);
    }
}




var posts = [{
        user: "Tammy",
        message: "I did it!"
    },
    {
        user: "Tom",
        message: "seriously?"
    },
    {
        user: "Zorro",
        message: "why don't people just get it!"
    },
    {
        user: "Jorge",
        message: "good day today"
    },
    {
        user: "Victoria",
        message: "yay!"
    },
    {
        user: "Bobo",
        message: "Last night was the most amazing afternoon!"
    }
]

console.log("Adding a new property ----------------------------");

//Adds a new property to each posts called friends that is an array of every
//user except the user that the post belongs to. Do not re-write it manually!
var userArray = [];

for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
    userArray.push(posts[i].user);
    postsArray.push(posts[i].message);

    for (let i = 0; i < userArray.length; i++) {
        if (posts[i].user !== userArray[i]) {
            posts.friends += userArray[i];
        }
    }

}
console.log(posts);

//////////////////////////////////////////////////////////////////////////////
//-------------------------------------------Arrays in Objects in Arrays in Objects
///////////////////////////////////////////////////////////////////////////////


var minestroneSoup = {
    materials: [{
            ingredients: [
                "olive oil",
                "vegetable stock",
                "onions",
                "celery",
                "salt",
                "pepper",
                "tomatoes",
                "garlic",
                "basil",
                "oregano",
                "carrots",
                "green beans",
                "kidney beans",
            ]
        },
        {
            cookware: [
                "cooking pot",
                "cooking spoon",
            ]
        }
    ],
    quantities: [{
            teaspoons: [{
                    "olive oil": 5
                },
                {
                    "salt": 1
                },
                {
                    "pepper": 1
                },
                {
                    "basil": 2
                },
                {
                    "oregano": 2
                },
                {
                    "garlic": 2
                }
            ]
        },
        {
            cups: [{
                    "vegetable stock": 2
                },
                {
                    "kidney beans": 1
                },
                {
                    "green beans": 1
                }
            ]
        },
        {
            whole: [{
                    "onions": 2
                },
                {
                    "celery": 1
                },
                {
                    "carrots": 2
                },
                {
                    "tomatoes": 2
                }
            ]
        },
    ]
}

// Returns our Minestrone soup's ingredients.
//
console.log(minestroneSoup.materials[0].ingredients);

// Returns our Minestrone soup's cookwares.
//
console.log(minestroneSoup.materials[1].cookware);
// Returns all of the quantities in our Minestrone soup.
//
console.log(minestroneSoup.quantities[0]);
console.log(minestroneSoup.quantities[1]);
console.log(minestroneSoup.quantities[2]);

// Returns all ingredients that are measured in teaspoons.
//
console.log(minestroneSoup.quantities[0]);

// Returns the first ingredient that is measured in whole pieces.
//
console.log(minestroneSoup.quantities[2]);

// Adds a new item in quantities under cups for 1 cup of elbowPasta.
//
minestroneSoup.quantities[1].cups.elbowPasta = 1;
console.log(minestroneSoup.quantities[1]);

// Returns the first three ingredients that are measured in cups.
//
//----------------------First 3 ingredients measured in cups
for (var a = 0; a < 2; a++) {
    console.log(minestroneSoup.quantities[1].cups[a]);
}

console.log(minestroneSoup.quantities[1].cups[0]);

// Returns the total number of teaspoons in the recipe.
console.log(minestroneSoup.quantities[0]);
for (let b = 0; b < minestroneSoup.quantities[0].length; b++) {
    console.log(minestroneSoup.quantities[0]);
}


//////////////////////////////////////////////////////////////////////////////
//-------------------------------------------Mind Bending Access Bonus
///////////////////////////////////////////////////////////////////////////////
var crm = {
    people: [{
            id: 2,
            firstName: "Savannah",
            lastName: "Clementina",
            employments: []
        },
        {
            id: 3,
            firstName: "Elyse",
            lastName: "Jensen",
            employments: [{
                companyId: 142,
                title: "Chief Communications Consultant"
            }]
        },
        {
            id: 4,
            firstName: "Frieda",
            lastName: "Tess",
            employments: [{
                companyId: 31,
                title: "Dynamic Data Specialist"
            }]
        },
        {
            id: 6,
            firstName: "Elise",
            lastName: "Camylle",
            employments: [{
                    companyId: 57,
                    title: "Regional Applications Designer"
                },
                {
                    companyId: 9,
                    title: "Internal Mobility Executive"
                }
            ]
        },
        {
            id: 8,
            firstName: "Francis",
            lastName: "Arlo",
            employments: []
        },
        {
            id: 9,
            firstName: "Clementina",
            lastName: "Geraldine",
            employments: [{
                    companyId: 6,
                    title: "Direct Response Agent"
                },
                {
                    companyId: 3,
                    title: "Investor Metrics Officer"
                }
            ]
        },
        {
            id: 10,
            firstName: "Jeanie",
            lastName: "Annie",
            employments: []
        },
        {
            id: 11,
            firstName: "Myra",
            lastName: "Sylvester",
            employments: [{
                companyId: 57,
                title: "Direct Directives Officer"
            }]
        },
        {
            id: 12,
            firstName: "Magdalen",
            lastName: "Wendy",
            employments: [{
                    companyId: 9,
                    title: "Product Operations Officer"
                },
                {
                    companyId: 3,
                    title: "Customer Paradigm Designer"
                }
            ]
        },
        {
            id: 16,
            firstName: "Eloisa",
            lastName: "Aubree",
            employments: [{
                    companyId: 89,
                    title: "Internal Configuration Producer"
                },
                {
                    companyId: 31,
                    title: "Regional Branding Administrator"
                }
            ]
        },
        {
            id: 17,
            firstName: "Rozella",
            lastName: "Walter",
            employments: []
        },
        {
            id: 18,
            firstName: "Brent",
            lastName: "Shannon",
            employments: [{
                    companyId: 31,
                    title: "District Implementation Developer"
                },
                {
                    companyId: 57,
                    title: "District Factors Designer"
                }
            ]
        },
        {
            id: 19,
            firstName: "Jaren",
            lastName: "Easter",
            employments: [{
                companyId: 142,
                title: "District Communications Director"
            }]
        },
        {
            id: 20,
            firstName: "Jaqueline",
            lastName: "Genoveva",
            employments: []
        },
        {
            id: 22,
            firstName: "Darby",
            lastName: "Della",
            employments: [{
                companyId: 57,
                title: "Principal Branding Strategist"
            }]
        },
        {
            id: 27,
            firstName: "Jane",
            lastName: "Otto",
            employments: []
        },
    ],
    companies: {
        0: "Nicolas and Sons",
        57: "Mueller LLC",
        2: "Mohr, King and Gleason",
        3: "Grimes Inc",
        142: "Schmidt-Rolfson",
        5: "Shanahan, Altenwerth and Nikolaus",
        6: "Dickens, Blanda and Bosco",
        31: "Nikolaus Inc",
        89: "Rempel, Berge and Bogan",
        9: "Steuber, Wisozk and Gorczany"
    }
}

//From node.js
//module.exports = crm;
//Loop through the companies
for (var companyNum in crm.companies) {

    //console.log('\n');
    var companyName = crm.companies[companyNum];
    console.log(companyNum + " " + companyName);

    //find the people with the matching companyNum
    for (var i = 0; i < crm.people.length; i++) {
        //Rule out the people without employments
        if (crm.people[i].employments.length > 0) {

            //Get the ones that match the employee number and show them
            if (crm.people[i].employments[0].companyId == companyNum) {
                console.log(
                    "\t" + crm.people[i].firstName + " " +
                    crm.people[i].lastName + " - " +
                    crm.people[i].employments[0].title);
            }
        }
    }
}

//Output:
// 0 Nicolas and Sons
// 2 Mohr, King and Gleason
// 3 Grimes Inc
// 5 Shanahan, Altenwerth and Nikolaus
// 6 Dickens, Blanda and Bosco
// 	Clementina Geraldine - Direct Response Agent
// 9 Steuber, Wisozk and Gorczany
// 	Magdalen Wendy - Product Operations Officer
// 31 Nikolaus Inc
// 	Frieda Tess - Dynamic Data Specialist
// 	Brent Shannon - District Implementation Developer
// 57 Mueller LLC
// 	Elise Camylle - Regional Applications Designer
// 	Myra Sylvester - Direct Directives Officer
// 	Darby Della - Principal Branding Strategist
// 89 Rempel, Berge and Bogan
// 	Eloisa Aubree - Internal Configuration Producer
// 142 Schmidt-Rolfson
// 	Elyse Jensen - Chief Communications Consultant
// 	Jaren Easter - District Communications Director
