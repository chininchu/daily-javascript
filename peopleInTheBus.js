"use strict";

let number = (busStops) => {


    let totalOntheBus = 0;

    let totalOftheBus = 0;


    for (let i = 0; i < busStops.length; i++) {


        for (let j = 0; j < 2; j++) {


            if (j === 0) {

                totalOntheBus += busStops[i][j];


            } else if (j === 1) {


                totalOftheBus += busStops[i][j];
            }


        }


    }

    return totalOntheBus - totalOftheBus;


}


console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));





