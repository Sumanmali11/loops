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


function writeDOM(tag, result) {
    const div = document.getElementById(tag);
    div.innerHTML = result
}

function createElement(tag, result) {
    let element = document.createElement("p");
    element.innerHTML = result;
    const div = document.getElementById(tag);
    div.appendChild(element)
}

const pyramid = () => {
    const height = 7;

    for (var i = 1; i < height; i++) {
        let string = '';
        
        for (var j = 1; j < height - i; j++) {
            string += ' ';
        }

        for (var j = 1; j <= 2 * i - 1; j++) {
            string += '*';
        }
        createElement('pyramid', string);
    }
}

const rectangle = () => {
    const height = 5;
    const width = 10;

    for (var i = 0; i < height; i++) {
        let string = '';

        for (var j = 0; j < width; j++) {
            if (i == 0 || i == (height - 1) || j == 0 || j == (width - 1)) {
                string += '*';
            } else {
                string += '_';
            }

        }
        createElement('rectangle', string)
    }
}


function getResult() {
    divide();
    prime();
    odd();
    pattern();
    pyramid();
    rectangle();
}