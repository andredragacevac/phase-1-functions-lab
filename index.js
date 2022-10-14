// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let distance = Math.abs(42-location)
    return distance
}
distanceFromHqInBlocks(43)

function distanceFromHqInFeet(location){
    let distance = Math.abs(42-location)*264
    return distance
}
distanceFromHqInFeet(43)

function distanceTravelledInFeet(start,destination){
    let distance = Math.abs(start-destination)*264
    return distance
}
distanceTravelledInFeet()

function calculatesFarePrice(start,destination){
    let distance = Math.abs((start-destination)*264)
    let fare = (distance *.02)-(400*.02)
    let flat = 25
    if (distance<=400){
    return /*`Your total is $ ${*/fare*0/*}. Thank you!`*/
    }
    else if (distance>400 && distance<2000){
    return /*`Your total is $ ${*/fare.toFixed(2)/*}. Thank you!`*/
    }
    if (distance>2000 && distance<2500){
        return /*`Your total is $ ${*/flat/*}. Thank you!`*/
    }
    else
    return 'cannot travel that far'
}