const lifes = document.querySelector('.js-time-score__life-number');
const points = document.querySelector('.js-time-score__points-nmb');
const time = document.querySelector('.js-time-score__time');
const table = document.querySelector('.js-table');
const startBtn = document.querySelector('.js-btn__start');
const resetBtn = document.querySelector('.js-btn__reset');

let td = document.getElementsByTagName('td');
let tdArray;
let timeLoss;

const squareNumberInRow = 5;
const lifesNumber = 3;
let initialTime = 60;
let scoreCounter  = 0;

let timeoutForActiveClass;
let timeoutForPlayerTime;

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

const decrementTime = () => {

    if(initialTime <= 0) {
        alert("Straciłeś życie");
        clearInterval(timeoutForPlayerTime);
        initialTime = 60;
    }
    initialTime--;
    time.innerText = initialTime;
    console.log('dziala');
};
const startGame = () => {
    startBtn.disabled = true;
    timeoutForPlayerTime = setInterval(decrementTime, 1000);

    addActiveClass();
};

const resetGame = () => {
    lifes.innerText = lifesNumber;
    points.innerText = 0;
    time.innerText = initialTime;

};


startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

