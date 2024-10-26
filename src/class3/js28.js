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
console.log(restTeams)