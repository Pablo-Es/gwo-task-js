let lifes = document.querySelector('js-time-score__life-number');
let points = document.querySelector('js-time-score__points-nmb');
let time = document.querySelector('js-time-score__time');



const squareNumberInRow = 5;
const setSquare = (squareNumberInRow) => {
    let tr = '';
    let output = '';
for (let i = 0; i < squareNumberInRow; i++) {
    output += '<tr></tr>';
    for(let j = 0; j < squareNumberInRow; j++) {
        output+= '<td></td>';
    }
    console.log(output);
}
};
setSquare(squareNumberInRow);