
let num = [10, 20, 30, 40, 50, 6, 7, 8, 9, 10]

for(i in num){
    console.log(i)
}
console.log("__________________________")

for(i of num){
    console.log(i)
}

console.log("__________________________")

let names = ["vrushali", "pune", "maharashtra", "india"]

for(i in names){
    console.log(i)
}

console.log("__________________________")

for(i of names){
    console.log(i)
}

console.log("__________________________")

let info = {
    name : "vrushali",
    age : 22,
    city : "pune",
    hobbies : ["reading","travelling","cooking"],
}

for(i in info){
    console.log(i)
}
console.log("__________________________")

for(i of info){
    console.log(i)
}