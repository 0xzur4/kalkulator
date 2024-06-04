'use strict'

const input = document.querySelector('.num')
const buttons = document.querySelectorAll('.btnCalc')

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const value = this.value;
        switch(value){
            case 'clear':
                input.value = '';
                break;
            case '=':
                try {
                    const result = input.value
                    .replace(/\u00D7/g, '*')
                    .replace(/\u00F7/g, '/')
                    .replace(/\u2212/g, '-')
                    .replace(/x/g, '*')
                    .replace(/%/g, '%');
                input.value = eval(result);
                }catch{
                    input.value = 'Error'
                }
                break;
            default:
                input.value += value
                break;
        }
    })
})





// const component = {
//     one: document.querySelectorAll('.btnOne'),
//     two: document.querySelectorAll('.btnTwo'),
//     three: document.querySelectorAll('.btnThree'),
//     four: document.querySelectorAll('.btnFour'),
//     five: document.querySelectorAll('.btnFive')
// }
// const unsur = {
//     krwOpen: '(',
//     krwClose: ')',
//     persen: '%',
//     angka: [0,1,2,3,4,5,6,7,8,9],
//     operator: [`\u002B`, `\u2212`, `\u00f7`, `\u00D7`],
//     lain: [0o00, ',', '=']
// }

// function eventListen(buttons, values){
//     buttons.forEach((button, index)=>{
//         button.addEventListener('click', function(){
//             input.value += values[index];
//             switch(values[index]){
//                 case '+':
                    
//             }
//         })
//     })
// }



// function addEvent(){
//     eventListen(component.one, [
//         unsur.krwOpen,
//         unsur.krwClose,
//         unsur.persen,
//         unsur.operator[2]
//     ])
//     eventListen(component.two, [
//         unsur.angka[7],
//         unsur.angka[8],
//         unsur.angka[9],
//         unsur.operator[3]
//     ])
//     eventListen(component.three, [
//         unsur.angka[4],
//         unsur.angka[5],
//         unsur.angka[6],
//         unsur.operator[1]
//     ])
//     eventListen(component.four, [
//         unsur.angka[1],
//         unsur.angka[2],
//         unsur.angka[3],
//         unsur.operator[0]
//     ])
//     eventListen((component.five), [
//         unsur.angka[0],
//         unsur.lain[0],
//         unsur.lain[1],
//         unsur.lain[2]
//     ])
// }

// addEvent();



