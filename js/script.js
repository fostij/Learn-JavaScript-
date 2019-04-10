'use strict';

// Валідація форми

/**function validate(){

    let userName = document.getElementById('userName');
    let email = document.getElementById('email');
    let text1 = document.getElementById('text_1');
    let text2 = document.getElementById('text_2');

    if(userName.value == "") {
        userName.style.border = "2px solid red";
        text1.style.color = "red";
        text1.innerText = "Форма не заповнена";
        email.style.border = "2px solid red";
        text2.style.color = "red";
        text2.innerText = "Форма не заповнена";
        return false;
    }
    else if(userName.value != ""){
        userName.style.border = "2px solid green";
        text1.style.color = "green";
        text1.innerText = "Форма заповнена";
        email.style.border = "2px solid green";
        text2.style.color = "green";
        text2.innerText = "Форма заповнена";
    }

    if(email.value == "") {
        email.style.border = "2px solid red";
        text2.style.color = "red";
        text2.innerText = "Форма не заповнена";
        userName.style.border = "2px solid green";
        text1.style.color = "green";
        text1.innerText = "Форма заповнена";
        return false;
    }
    else if(email.value != ""){
        email.style.border = "2px solid green";
        text2.style.color = "green";
        text2.innerText = "Форма заповнена";
        userName.style.border = "2px solid green";
        text1.style.color = "green";
        text1.innerText = "Форма заповнена";
    }
    return true;
};



// Скріпт часу
 setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementsByClassName('date').innerHTML = time;
}, 1000);

//progres
function userProgress(time) {
    let start = 0;
    var time = Math.round(time * 1000 / 100);
    let progressElement = document.getElementById('prog');
    let intervalId = setInterval(function(){
        if(start > 100) {
            clearInterval(intervalId);
            userProgressCallBack();
        }
        else{
            progressElement.value = start;
        }
        start++;
    },time);
    function userProgressCallBack() {
        document.querySelector('.hidden_block').style.display = 'block';
    }
}

userProgress(1);

//str
let str = document.getElementById('str');
let str2 = 'jdcbsjbjbscjbdjcbkwbcjsbkcbkbck';
        for(let i = 0; i < str2.length; i++) {
            str.innerText = str2;

        }


function animate(id) {
    var node = document.getElementById(id).childNodes[0];
    var text = node.data;
    setInterval(function () {
        text = text.substring(1) + text[0];
        node.data = text;
    }, 2000); //интервал прокрутки, мс
}
window.addEventListener('load', function (e) { animate('marqueeline'); }, false);

        //practick

//var obj = {1: 'Понеділок', 2: 'Вівторок', 3: 'Cереда', 4: 'Четвер', 5: 'Пятниця', 6: 'Субота', 7: 'Неділя'};
//alert(obj[5]);
//alert(obj[6]);
//document.write(arr['en'][2] + ' ' + arr['ru'][0]);
//let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
//alert(obj['js'][0]);
//let obj = {
//    'ru':['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//    'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
//};

//alert(obj['ru'][4]);
//alert(obj['en'][4]);

//var arr = {
//    'ru':['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//    'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
//};

//let leng = 'ru';
//let day = 3;
//alert(arr[leng][day]);
// var a = 3;
// let b = 7;
// if((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//    alert(a + b);
//} else{
//    alert(a - b);
//}

//let num = 1;
//switch(num){
//    case 2: alert('Весна');
//    break;
//    case 1: alert('Зима');
//    break;
//    default: alert('НЕ ВИЗНАЧЕНО');
//    break;
//}
**/
                                                       // puzzle //

/**let puzzle = document.getElementById('puzzle');
let date = document.getElementById('date');
let spantext = document.getElementById('spantext');
let spandate = document.getElementById('spandate');

function puzzl() {

    if (puzzle.value == "") {
        alert('Ви не заповнили поле 1');
        puzzle.style.outline = '2px solid red';
        spantext.style.color = 'red';
      return false;
    }
    else if(puzzle.value != ""){
        puzzle.style.outline = '2px solid green'
        spantext.style.color = 'green';

    };

    if (date.value == "") {
        alert('Ви не заповнили поле 2');
        date.style.outline = '2px solid red';
        spandate.style.color = 'red';
        return false;
    }
    else if(date.value != ""){
        date.style.outline = '2px solid green';
        spandate.style.color = 'green';

    };

};


let comments = [];
loadComments();

document.getElementById('button').onclick = function () {
    event.preventDefault();
    let puzzle = document.getElementById('puzzle');
    let date = document.getElementById('date');

    let comment = {
        puzz : puzzle.value,
        dates : date.value,
    };
    puzzle.value = '';
    date.value = '';
    comments.push(comment);
    //Save function.
    saveComments();
    //Show function.
    showComments();
};

//Save function.
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
};

//SaveCommentsLoad
function loadComments() {
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

//Show function.
function showComments() {
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="comm_puzzle">${item.puzz}</p>`;
        out += `<p class="com_date">${item.dates}</p>`;
        out += `<hr class="hr">`;
    });
    commentField.innerHTML = out;
};
 **/
/**
//Бесконечный слайдер на JavaScript //

var slides = document.querySelectorAll('.slide-single'); // Колекція усіх картинок по класу.
console.log(slides);
var slider = []; //Вспомагательний массив слайдер з початку він буде пустий потім в нього в ньому ми будемо отримувати src атрибути зображення.
for(var i = 0; i < slides.length; i++){ // Циклом визначаємо довжину массиву усіх картинок slides.
    slider[i] = slides[i].src; // Массив усіх путей до картинок.
    slides[i].remove(); // Коли ми вичитали ссилки на зображення ми картинки видаляємо з сторінки. Після цього залишається тільки массив путей ми з ними і будемо далі працювати.
}
console.log(slider);

var step = 0; // Шаг зображення. Це яку картинку показувати в блоці. 0,1,2,3,4,5. А потім вертаємо до 0. Це контроль состоянія слайдера.
var offset = 0; // Змішення зображення.

// Функція показу яка создаст нам 2 зображення.
function draw(){
   var img = document.createElement('img'); // Создаємо картинку.
   img.src = slider[step];  // src щоб картинка була видна. Це ссилка на картинку в завісімості от step вона буде мінятися.
   img.classList.add('slide-single'); // Присвоюємо картинці класс.
   img.style.left = offset * 512 + 'px'; // Получаємо картинку і інтегруємо її во внутирь блоку но перед цим задаємо її зміщення offset.Спочатку це 0 * 512 а потім 512 * 512 і так далі. 512 це ширина картинки при адаптивності ми виносимо ширину в окрему перемінну і будемо її міняти.
   document.querySelector('#slide').appendChild(img); // Добавляємо картинку получаємо блок слайдера і добавляємо туди картинку.

    if(step + 1 == slider.length){ // Оприділяємо кінечні действія чи можемо ми наращувати step чи маємо ми на це право.
        step = 0; // Якщо step == довжині массиву slider то ми обнуляємо step.
    }
    else{
        step++; // Інакще плюсуємо його наращуємо шаг.
    }
   offset = 1; // При наступному запуску у нас буде 1 * 512 картинка зміщена в право це все буде працювати тільки до кінця массиву щоб він працював безкінечно ми перевіряємо;
}

// Для того щоб слайдер запустився ми відловлюємо собитіє це може бути таймер, клік по документу по кнопці вправо вліво, та інше.
function left(){ // Функція для зміщення картинок на собитіє центральну в ліво а праву в центр на 512px після цього циклу удаляємо ці картинки і створюємо нові.
    document.onclick = null; // Обнуляємо собитіє щоб небуло зициклювання.
   var slides2 = document.querySelectorAll('.slide-single'); // Вспомагательна перемінна яка показує видимі картинки на HTML сторінці.
   var offset2 = 0; // Зміщення цих картинок;
   for(var i = 0; i < slides2.length; i++){// Перебираємо колекція із 2 елементів.
    slides2[i].style.left = offset2 * 512 - 512 + 'px';   // Зміщення зображення left;
    offset2++; // 1 * 512 - 512 = 0;
   }
   setTimeout(function () { // Час за який буде видалятися елемент з ліва.
       slides2[0].remove(); // Видалення 1 елемента з ліва.
       draw(); //
       document.onclick = left; // Запускаємо клік після обнулення.
   }, 1000);
}

draw(); // Визиваємо функцію створення та  добавлення картинки в блок.
draw();
document.onclick = left; // Запускаємо клік.


                                                                  // JavaScript. Число над слайдером //

var range = document.querySelector('.number');
var rangeNum = document.querySelector('.range-num');
range.oninput = function(){
    rangeNum.style.left = this.value -10 + 'px';
    rangeNum.innerHTML = this.value;
};
**/

