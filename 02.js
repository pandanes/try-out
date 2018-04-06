'use strict';

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

function combine (){
    const comb = first.concat(second, third);
    //this works as well:
    //const comb = [...first, ...second, ...third];
    const sentence = comb.join(' ');
    return sentence;
}

//to test:
//console.log(combine());
