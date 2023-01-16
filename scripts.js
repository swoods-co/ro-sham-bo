function getComputerChoice () {

    const choice = ['Rock', 'Paper', 'Scissors'];

    const answer = choice[Math.floor(Math.random()*choice.length)];

    return console.log(answer);
}