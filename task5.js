function traffic_light(color) {
    if(color === "green") {
        console.log(`that is a ${color}, you can go`);
    }else if (color === "yellow"){
        console.log(`you can either go fast or stay and wait until green color because that is a ${color}`);
    } else if(color === "red") {
        console.log(`now is a ${color}, you have to stay and wait`);
    } else {
        console.log("traffic light is broken, please wait the polisia=)")
    }
}
traffic_light("green")
traffic_light("yellow")
traffic_light("red")
traffic_light("smth happened")
