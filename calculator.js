var action = process.argv[2];
var number1 = parseInt(process.argv[3]);
var number2 = parseInt(process.argv[4]);



function add(number1, number2) {

    if (number1 === 'undefined' || number2 === 'undefined') {

        console.log('you have to include numbers correctly!!')

    } else if (typeof (number1) !== 'number' || typeof (number2) !== 'number') {

        console.log('you have to include numbers correctly!!')


    }
    return number1 + number2;
}



function substract(number1, number2) {
    if (number1 === 'undefined' || number2 === 'undefined') {

        console.log('you have to include numbers correctly!!')

    } else if (typeof (number1) !== 'number' || typeof (number2) !== 'number') {

        console.log('you have to include numbers correctly!!')
        console.log(number1 - number2);
    }
    function multiply(number1, number2) {
        if (number1 === 'undefined' || number2 === 'undefined') {

            console.log('you have to include numbers correctly!!')

        } else if (typeof (number1) !== 'number' || typeof (number2) !== 'number') {

            console.log('you have to include numbers correctly!!')
            console.log(number1 * number2);
        }
        function divide(number1, number2) {
            if (number1 === 'undefined' || number2 === 'undefined') {

                console.log('you have to include numbers correctly!!')

            } else if (typeof (number1) !== 'number' || typeof (number2) !== 'number') {

                console.log('you have to include numbers correctly!!')
                console.log(number1 / number2);
            }
            function remainder(number1, number2) {
                if (number1 === 'undefined' || number2 === 'undefined') {

                    console.log('you have to include numbers correctly!!')

                } else if (typeof (number1) !== 'number' || typeof (number2) !== 'number') {

                    console.log('you have to include numbers correctly!!')
                    console.log(number1 % number2);
                }



                if (action === 'add') {

                    add();

                }


                else if (action === 'substract') {

                    substract();

                }

                else if (action === 'multiply') {

                    multiply();
                }

                else if (action === 'divide') {

                    divide();
                }

                else if (action === 'remainder') {

                    remainder();
                }