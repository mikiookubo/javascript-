for(var i = i=0; i<9; i++){
    console.log("ループ処理"+i+"回目");
};

var fruits=["モモ","ブドウ","イチゴ"];
for(index in fruits){
    console.log(fruits[index]);
};

var friends=[
    {
        name:"ゆか",
        age:25,
        from:"日本"
    },
    {
     name:"ゆい",
     age:25,
     from:"日本"
    }, 
    {
     name:"あいか",
     age:25,
     from:"日本"
    }
]

for(friend of friends){
    console.log(friend);
};