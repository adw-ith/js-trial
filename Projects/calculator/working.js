(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btr');
    let equal = document.querySelector('.btg');
    let neg = document.querySelector('.btyy');


    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=> {
            let value = e.target.dataset.num;
                screen.value += value;
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value='';
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer
        }
    });

    clear.addEventListener('click',function(e){
        screen.value=''
    });

    neg.addEventListener('click',function(e){
        let answer = eval(screen.value*-1)
        screen.value=answer
    });


})();