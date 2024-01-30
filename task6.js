function wantSweet(day_of_the_week, the_amount_of_work, amount_of_chocolate) {
    let mood = 0;
    while (the_amount_of_work <= 10) {
        if(day_of_the_week === 'Monday' && amount_of_chocolate >= 4){
            console.log("I am happy even though is a Monday, and my mood is " + (mood + 1));
        }else if(day_of_the_week === 'Tuesday' && amount_of_chocolate >= 3) {
            console.log("That's is a Tuesday and I'm still happy because the amount of mood is: " + (mood + 1));
        }else if(day_of_the_week === 'Wednesday' && amount_of_chocolate >= 3) {
            mood++;
            console.log("Today is a beautiful Wednesday, and the amount of mood is " + mood + '. There is enough chocolate in my body');
        }else if(day_of_the_week === 'Thursday' && amount_of_chocolate >= 3){
            console.log("That is Thursday, that is mean that we can have weekends soon and eat even more chocolate, so my mood is: " + (mood + 10));
        }else if(day_of_the_week === 'Friday' && amount_of_chocolate >= 5){
            console.log('on Friday I need more chocolate because i am looking forward to the weekends but my mood is still increasing: ' + (mood + 20));
        }else if(day_of_the_week === 'Saturday' && amount_of_chocolate >= 1){
            console.log("I have eaten a lot of chocolate during the week, nevertheless, i would eat one more" + (amount_of_chocolate + 2) + " and my mood is " + (mood + 100));
        }else if(day_of_the_week === 'Sunday' && amount_of_chocolate >= 4){
            console.log("i still need one more chocolatka because it is almost Monday but my mood is happy because there is one more day for relaxing " + (mood + 1000));
        }else{
            console.log("I am sad" + (mood === 0));
        }
        break;
    }
}

// Test the function with different inputs
wantSweet("Monday", 10, 5);
wantSweet("Tuesday", 8, 3);
wantSweet("Wednesday", 6, 3);
wantSweet("Thursday", 4, 5);
wantSweet("Friday", 2, 6);
wantSweet("Saturday", 0, 5);
wantSweet("Sunday", 0, 8);
