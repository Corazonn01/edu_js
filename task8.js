let another_list = [1, 3, 5, 6, 0, 10, 22, 45];
new_list = []
for(let ii = 0; ii < another_list.length; ii++){
    if(another_list[ii]%2 === 0){
        new_list.push(another_list[ii] + "-")
    }else{
        new_list.push(another_list[ii]);
    }
}
console.log(new_list.join(""))
