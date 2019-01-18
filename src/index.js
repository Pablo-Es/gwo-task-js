let lifes = document.querySelector('.js-time-score__life-number');
let points = document.querySelector('.js-time-score__points-nmb');
let time = document.querySelector('.js-time-score__time');
const table = document.querySelector('.js-table');


const squareNumberInRow = 6;
const setSquare = (squareNumberInRow) => {
let output ='';
for (let i = 0; i < squareNumberInRow; i++) {

    let td = '';
    for(let j = 0; j < squareNumberInRow; j++) {
        td+= `<td data-tdId="td_${i}${j}"></td>`;
    }
    output += `<tr>${td}</tr>`;


}
    table.innerHTML = output;

};
setSquare(squareNumberInRow);