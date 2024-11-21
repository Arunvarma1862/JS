// object destrucing

let Team={
    ind:"india",
    aus:"australia",
    eng:"england",
    sa:"southafrica"
}
// const Team1=Team.ind;
// const Team2=Team.aus;
// console.log(Team1,Team2)

const{ind:Team1,aus,...restTeams}=Team;

console.log(Team1);
console.log(aus)
console.log(restTeams);


//2

const fruits={
    key1:"mango",
    key2:"apple",
    key3:"kiwi",
    key4:"banana"
}

const {key1:fruits1, key2,...restkeys}=fruits;
console.log(fruits1);
console.log(key2);
console.log(restkeys)