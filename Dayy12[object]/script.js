let data= {
    name : "vrushali",
    age : 22,       
    city : "pune",
    hobbies : ["reading","travelling","cooking"],
}
console.log(data);

data.hobbies.pop(0)
console.log(data);

let myInstaData={

    is_private : true,
    is_verified : true,
    user_name : "vrushali",
    acc_type : "personal",
    acc_name : "vrushali",

    following : {
        1 : "pinkii",
        2 : "siddhi",
    },

    followers : {
        1 : "siddhi",
        2 : "priyanka",
    },
    posts : {
        1 : "my first post",
        2 : "my second post",
    },

}

console.log(myInstaData);

myInstaData.is_private = false;

myInstaData.posts[3] = {
    url : "https://www.instagram.com",
    liks : 100,
    img : "https://www.instagram.com",
}

console.log(myInstaData);