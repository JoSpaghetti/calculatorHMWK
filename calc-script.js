(function () {

    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.numb', '.operator');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            display.value += value;
        })
    });

    equal.addEventListener('click', function(e) {
        if (display.value === '') {
            display.value = ""
        } else {
            var intArr = Array.from (String(display.value), myFunc);
            for (int i = 0; i < display.value.length(); i++;) {
                
                switch (intArr[]) {
                    case '+':
                        intArr[i] + intArr[i-1];
                        break;
                    case '-':
                        intArr[i] - intArr[i+1];
                        break;
                    case "/":
                        intArr[i] / intArr [i+1];
                        break;
                    case "*":
                        intArr[i] * intArr[i+1];
                        break;
                }
            }
            switch ()
        }
    })


})();