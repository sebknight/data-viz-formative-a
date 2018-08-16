

var morning = new Date();
morning.setHours(20);
morning.setMinutes(30);

var midday = new Date();
midday.setHours(24);
midday.setMinutes(0);

var afternoon = new Date();
afternoon.setHours(3);
afternoon.setMinutes(30);


var times = {
    "morning": morning,
    "midday": midday,
    "afternoon": afternoon
}




//Could take suburb name options out of HTMl and put them in data
//Give them IDs
//Then wouldn't have to access suburb name twice and can limit transport options