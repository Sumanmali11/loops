function divide() {
    let array = [4, 8, 12, 24, 36, 48, 40];
    let result = [];

    array.forEach((item, index) => {
        result[index] = item / 4;
    });

    writeDOM('divide', result);
}

function prime() {
    let array = [1, 7, 3, 6, 5, 9, 12, 37];
    let result = [];
    let counter = 0;

    array.forEach((item) => {
        if (check(item)) {
            result[counter] = item;
            counter++
        }
    })

    writeDOM('prime', result);
}

function check(variable) {
    for (let i = 2; i < variable; i++) {
        if (variable % i == 0) {
            return false;
        }
    }
    return true;
}

function odd() {
    let array = [1, 2, 3, 4, 5, 9, 12, 37, 48];
    let result = [];
    let counter = 0;

    array.forEach(item => {
        if (item % 2 != 0) {
            result[counter] = item;
            counter++;
        }
    });

    writeDOM('odd', result);
}

function pattern() {
    /**
     * 0 1 1 1
     * 1 0 1 1
     * 1 1 0 1
     * 1 1 1 0
     */
    const div = document.getElementById('pattern');
    let array = [];
    for (let i = 0; i < 4; i++) {
        array[i] = [];
        for (let j = 0; j < 4; j++) {
            if (i === j) {
                array[i][j] = '0';
            } else {
                array[i][j] = '1';
            }
        }

        let element = document.createElement("p");
        element.innerHTML = array[i];
        div.appendChild(element)
    }
}


function writeDOM(tag, result){
    const div = document.getElementById(tag);
    div.innerHTML = result
}


function getResult() {
    divide();
    prime();
    odd();
    pattern();
}