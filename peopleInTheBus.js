"use strict";

let number = (busStops) => {


    let totalOnOrOffTheBus = 0;


    for (let i = 0; i < busStops.length; i++) {


        for (let j = 0; j < 2; j++) {


            switch (j) {
                case 0:
                    totalOnOrOffTheBus += busStops[i][j];
                    break;
                case 1:
                    totalOnOrOffTheBus -= busStops[i][j];
                    break;
                default:
            }


        }


    }

    return totalOnOrOffTheBus;


}


console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));





