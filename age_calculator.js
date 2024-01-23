//task1 age calculator
function birthDate(currentDate, birthDate1, birthDate2) {
    const firstPos = currentDate - birthDate1
    const secondPos = currentDate - birthDate2
    console.log("Now it is " + currentDate + ". He is either " + firstPos + " either " + secondPos)
}
birthDate(2024, 2001, 2003)


//calculator task2
function birthDate1(currentDate1, birthDate) {
    let age = currentDate1 - birthDate;
    console.log("Now it is " + currentDate1 + ". He is either " + age + " or " + (age - 1));
}
birthDate1(2024, 2001);
