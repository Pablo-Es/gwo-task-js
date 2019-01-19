const lifes = document.querySelector('.js-time-score__life-number');
const points = document.querySelector('.js-time-score__points-nmb');
const time = document.querySelector('.js-time-score__time');
const table = document.querySelector('.js-table');
let td = document.getElementsByTagName('td');

let tdArray;

const squareNumberInRow = 5;
const lifesNumber = 3;
const initialTime = 60;
let scoreCounter  = 0;

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
const shuffleSquare = () => {

    tdArray = [...td];
    return tdArray.sort(() => Math.random() - 0.5);
};
const addActiveClass = () => {
  let randomIndex = Math.floor(Math.random()* td.length + 1);
    tdArray = [...td];
    tdArray = tdArray.map((item, idx) => {
       if(idx === randomIndex) {
           item.classList.add("active");
       }
    });
   // console.log(tdArray.ind;exOf(randomIndex))
  // tdArray.indexOf(randomIndex).classList.add("active");
};
addActiveClass();
console.log('tdArray=',tdArray);


