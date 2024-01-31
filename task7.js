let workPLace = ["Google", "yandex", "oxford", "Freelance", "Microsoft", "Apple"]
function FavWork(){
    for(let i = 0; i < workPLace.length; i++){
        if(i === 0){
            console.log("that is my first choice " + workPLace[0])
        }else if(i === 1){
            console.log("that is my second choice " + workPLace[1])
        }else if(i === 2){
            console.log("that is my third choice " + workPLace[2])
        }else if(i === 3){
            console.log("that is my fourth choice " + workPLace[3])
        }else if(i === 4){
            console.log("that is my fourth choice " + workPLace[4])
        }else if(i ===  5){
            console.log("that is my fourth choice " + workPLace[5])
        }else{
            console.log("here is smth wrong")
        }
    }
}
FavWork()
