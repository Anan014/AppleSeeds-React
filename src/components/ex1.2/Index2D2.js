import React from 'react'

const Index2D2 = () => {
    const data = ["hello", "world"];

    //1
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const caps = data.join(' ').split(' ').map(capitalize).join(' ');

    //2
    const number1 = 5;
    const number2 = 6;
    function addNumbers(num1, num2) {
        return `${num1} + ${num2} = ${num1 + num2}`
    }

    //3
    const string = "I love React!";
    function strLength(str) {
        return `The string's length is ${str.length}`
    }

    return (
        <div>
            <p>{caps}</p>
            <p>{addNumbers(number1, number2)}</p>
            <p>{strLength(string)}</p>
        </div>
    )
}

export default Index2D2