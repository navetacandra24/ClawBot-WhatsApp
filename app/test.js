const hand = function () {
    console.log('a');
}

hand.names = ['sd']
hand.h = hand.names.map(v => '3 ' + v)
console.log(hand.h);