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







