let num = 23;

if(num == 24){
    console.log('Верно');
}else if(num > 100){
    console.log('менше');
}else if(num <= 23) {
    console.log('==');
}
else {
console.log('Значення не співпадають');
}

switch(num){
    case num == 24:
    console.log('Верно');
    break;
    case num > 100:
    console.log('менше');
    break;
    case 23:
    console.log('==');
    break;
    default:
    console.log('Значення не співпадають');
    break;
}