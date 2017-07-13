const _ = require('lodash');

let games = [
    {
        nome: 'Mortal Kombat'
    ,   ano: 1990
    }
,   {
        nome: 'Street Fighter'
    ,    ano: 1994
    }
,   {
        nome: 'Top Gear' 
    ,   ano: 1991
    }
];

let resultado = _.find(games, { nome: 'Street Fighter'});

console.log(resultado);
