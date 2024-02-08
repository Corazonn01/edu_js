
let studentInfo = [{
    firstName: "Paolo",
    lastName: "Cohelo",
    email: "paulo.cohelo@gmail.com",
    phone: 12435634623,
    country: "Brasil",
    subject: "literature",
    scores: [12, 13, 14, 15],
    favFood: ["pizza", "taco", "ice cream"]

},
    {
        firstName: "Aizere",
        lastName: "Aizere",
        email: "aizere@gmail.com",
        phone: 234567889,
        country: "Kazakhstan",
        subject: "math",
        scores: [100, 12, 30, 19],
        favFood: ["ramen", "kfc", "crisps"]

    },
    {
        firstName: "Amina",
        lastName: "amina",
        email: "amina@gmail.com",
        phone: 3456789,
        country: "Kz",
        subject: "geo",
        scores: [23, 56, 67, 78],
        favFood: ["pizza", "sushi", "pelmeni"]
    },
    {
        firstName: 'altynai',
        lastName: "altynai",
        email: "@altynaigmail.com",
        phone: 4523555151,
        country: "Kz",
        subject: "math",
        scores: [56, 65, 34, 78],
        favFood: ["pelmeni", "ramen", "ice cream"]
    }, {
        firstName: 'elina',
        lastName: "Malina",
        email: "elina@gmail.com",
        phone: 456789024,
        country: "Kz",
        subject: "bio",
        scores: [100, 99, 98, 100],
        favFood: ["pizza", "taco", "tea"]
    },
    {
        firstName: 'Ayazhan',
        lastName: "ayazhan",
        email: "ayazhan@gmail.com",
        phone: 5650377490,
        country: "Kz",
        subject: "english",
        scores: [100, 94, 98, 10],
        favFood: ["varenici", "tea", "tea"]
    }

]

function greetStudent(){
    for(let i = 0; i <= studentInfo.length - 1; i++){
        console.log(`"hello" ${studentInfo[i].firstName} ${studentInfo[i].lastName}`);
    }
}
greetStudent();


function allScore() {
    studentInfo.forEach(student => {
        student.scores.forEach(score => {
            if (score <= 30) {
                console.log('okay  your score is F');
            } else if (score <= 50) {
                console.log("you passed the course, the grade is D");
            } else if (score <= 65) {
                console.log("the grade is C");
            } else if (score <= 85) {
                console.log("the grade is B");
            } else if (score >= 99) {
                console.log("the grade is A");
            }
        });
    });
}
allScore();
