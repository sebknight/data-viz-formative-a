// var morning = new Date();
// morning.setHours(8);
// morning.setMinutes(30);
// console.log(morning);
var morning = new Date();
morning.setHours(20);
morning.setMinutes(30);

var midday = new Date();
midday.setHours(24);
midday.setMinutes(0);

var afternoon = new Date();
afternoon.setHours(3);
afternoon.setMinutes(30);

var transit = "TRANSIT";

// var times = [morning, midday, afternoon]

var times = {
    "morning": morning,
    "midday": midday,
    "afternoon": afternoon
}


// var suburbs = {

// }


// var suburbs = [{
    
//     start: 'Aro Valley, Wellington',
//     end: 'Yoobee School of Design, Wellington',
//             transport: 'TRANSIT'
//     //             drivingOptions: {
//     //     morning: new Date();  // for the time N milliseconds from now.
//     //     afternoon: new Date();
//     //     evening: new Date();//     trafficModel: 'optimistic'
//     // }
// }]


// var journey = [{
// var suburbList = [{
//       1:  {
//         name: "aro valley, wellington",
//         transport: 'TRANSIT'
//         }
//     }]
// var suburbList = {
//     "aro valley, wellington": transit
    
// }

        // "aro valley, wellington": {
        //     // start: 'Aro Valley, Wellington',
        //     transport: 'TRANSIT'
        // },
        // wainui: {
        //     start: 'Wainuiomata, Lower Hutt',
        //     transport: 'TRANSIT'
        // },
        // evans: {
        //     start: 'Evans Bay, Wellington',
        //     transport: 'TRANSIT'
        // },
        // island: {
        //     start: 'Island Bay, Wellington',
        //     transport: 'TRANSIT'
        // },
        // grenada: {
        //     start: 'Grenada Village, Wellington',
        //     transport: 'TRANSIT'
        // },
        // newtown: {
        //     start: 'Newtown, Wellington',
        //     transport: 'TRANSIT'
        // },
        // newlands: {
        //     start: 'Newlands, Wellington',
        //     transport: 'TRANSIT'
        // },
        // lowerHutt: {
        //     start: 'Lower Hutt, Wellington',
        //     transport: 'TRANSIT'
        // }

    // }

// var tripData = {
//     suburbs: ["Aro Valley, Wellington", "Wainuiomata, Lower Hutt"],
//     transport: "TRANSIT"

// }
    //             drivingOptions: {
    //     morning: new Date();  // for the time N milliseconds from now.
    //     afternoon: new Date();
    //     evening: new Date();//     trafficModel: 'optimistic'
    // }
// }]

var suburbList = [{
    "aro valley, wellington": {
        transport: "TRANSIT"
    },
    "wainuiomata, lower hutt": {
        transport: "TRANSIT"
    }
}]