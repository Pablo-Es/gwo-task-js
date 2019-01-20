const lifes = document.querySelector('.js-time-score__life-number');
const points = document.querySelector('.js-time-score__points-nmb');
const time = document.querySelector('.js-time-score__time');
const table = document.querySelector('.js-table');
const startBtn = document.querySelector('.js-btn__start');
const resetBtn = document.querySelector('.js-btn__reset');
const activeClassList = document.getElementsByClassName('active');

let tdList = document.getElementsByTagName('td');
let tdArray;
let timeLoss;

const squareNumberInRow = 5;
const lifesNumber = 3;
let initialTime = 60;
let scoreCounter  = 0;


let timeoutForAddActiveClass;
let timeoutForRemoveActiveClass;
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

    tdArray = [...tdList];
    return tdArray.sort(() => Math.random() - 0.5);
};
const addActiveClass = () => {
  let randomIndex = Math.floor(Math.random()* tdList.length + 1);
    tdArray = [...tdList];
    tdArray = tdArray.map((item, idx) => {
       if(idx === randomIndex) {
           item.classList.add("active");
       }
    });

timeoutForRemoveActiveClass = setTimeout(removeActiveClass, 2000);
    console.log('addActive', tdList);
};
const removeActiveClass = () => {

    for (let i = 0; i < activeClassList.length; i++) {
        activeClassList[i].classList.remove('active');
    }

    console.log('remove',tdList);
};

const decrementTime = () => {

    if(timeLoss <= 0) {
        alert("Koniec gry");

        clearAllIntervals();
        removeActiveClass();
        initialTime = 60;
        startBtn.disabled = false;
        return
    }
    timeLoss--;

    time.innerText = timeLoss;

};
const addPoints = () => {
    let lossLife = lifesNumber;
    tdArray = [...tdList];
    tdArray.forEach(item => item.addEventListener('click',function() {
        console.log(this.classList);

if(lossLife > 0 ) {
    this.classList.contains('active')   ? scoreCounter++ : lossLife--;
    lifes.innerText = lossLife;

}

        console.log(lossLife);
    }))
};
const clearAllIntervals = () => {

    clearInterval(timeoutForPlayerTime);
    clearTimeout(timeoutForRemoveActiveClass);
    clearInterval(timeoutForAddActiveClass);

};
const startGame = () => {
    timeLoss = initialTime;

    addActiveClass();
    startBtn.disabled = true;
    timeoutForPlayerTime = setInterval(decrementTime, 1000);
    timeoutForAddActiveClass = setInterval( addActiveClass, 3000);


};

const resetGame = () => {
    clearAllIntervals();
    removeActiveClass();
    startBtn.disabled = false;

    lifes.innerText = lifesNumber;
    points.innerText = 0;
    time.innerText = initialTime;

};
addPoints();
// tile.addEventListener('click',addPoints);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

