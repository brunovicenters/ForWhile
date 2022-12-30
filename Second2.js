// Ctrl + K + C to comment all & Ctrl + K + U to uncomment

//Array
const why = ["porquê","porque","por que","por quê",4]; //Array

//Object
const life = {
    name: 'Bruno',
    hobby: 'read',
    girlfriend: false,
    friends: 10
}

//For
{
// console.log("   1 to 51");
// for (let i = 1; i <=51; i +=1){
//     console.log(i);
// }
// console.log("   51 to 1");
// for (let i = 51; i >= 1; i -= 2){
//     console.log(i);
// }
// {
// const names = ['Bruno', 'Yasmim', 
// 'Gustavo', 'Camila', 'Lucas', 'Joana',
// 'Cauã', 'Laryssa', 'Murilo', 'Paula',
// 'Fernando', 'Isabela', 'Vitor', 'Julia']

// console.log("   0 to 13");
// for (let i = 0; i < names.length; i++ ){
//     console.log(i + " " + names[i]);
// }

// console.log("   13 to 0");
// for (let i = names.length - 1; i >= 0 ; i-- ){
//     console.log(i + " " + names[i]);
// }
// }

// //Nested Loops
// for (let i = 1; i <=6; i++){
//     console.log(i);
//     for (let j = 1; j <3; j++){
//         console.log("   " + j);
//     }
// }

// const friends = [
//     ['Miguel', 'Gabirel', 'Thomas'],
//     ['Sabrina', 'Leonardo', 'Davi', 'Lary'],
//     ['Fernando', 'Cauã', 'Lucas', 'Yas'],
//     ['Joana', 'Fernanda']
// ]

// for (let i = 0; i < friends.length; i++) {
//     const classes = friends[i];
//     console.log("Class " + [i + 1]);
//     for (let j = 0; j < classes.length; j++) {
//         console.log("   " + classes[j]);
//     }
// }
}

//For...of
{
//  for (let pq of why){
//     console.log(pq);
//  }

//  for(let i of "Hello World!"){
//     console.log(i);
//  }

//  const games = [
//     ['Rainbow Six Siege'],
//     ['Bloons TD 6', 'Euro Truck', 'Monster Hunter: World'],
//     ['Dauntless', 'Nioh', 'Windbound', 'Rogue Legacy', 'Train Simulator'],
//     ['Overwatch 2', 'Diablo III']];

//     for (let platforms of games) {
//             for (let gameName of platforms)
//             console.log(gameName);
        
//     }
    
}

//For...of/in - Objects
{
    for(let accomp in life)
    console.log(`${accomp}: ${life[accomp]}`);

    const record = {
        P1: 88,
        P2: 06,
        P3: 33,
        P4: 100,
        P5: 23
    }

    for (let players in record){
        console.log(`${players} scored ${record[players]} at the test!`)
    }

    let total = 0;
    let scores = Object.values(record);
    let average = 0;
    
    for (let score of scores){
        total += score;
    }
    average = total / scores.length;
        console.log(`The average note was ${average}`)
}

//While
{
    // let me = "single";
    // while(me != "taken"){
    //     me = prompt("Define your love life.");
    //     console.log(`So you're ${me}?`)
    // }
}

