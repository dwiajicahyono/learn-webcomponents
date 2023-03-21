// const kopi = (bahan) =>{
//     return new Promise((resolve, reject) =>{
//         if(bahan){
//             resolve("kopi dibuat");
//         }else{
//             reject("kopi dibuang)");
//         }
//     });
// }

// kopi()
// .then(console.log)
// .catch(console.log)

const user ={
    name : "hari",
    origin : "ingling",
    enemy: "lord"
};
let {enemy} = user;
enemy = "malpoy";
console.log( user.enemy);