// console.log("Hello Word");

function fungsi1(cb){
    console.log('AAAA');
    cb();
}

function fungsi2(){
    console.log('Bismillah');
}

function fungsi3(){
    console.log('zonk');
}

fungsi1(fungsi3);