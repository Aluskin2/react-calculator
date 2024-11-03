import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('0');

    const handleCalculation = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setResult('Błąd: Wprowadź liczby!');
            return;
        }

        let calcResult;
        switch (operation) {
            case 'add':
                calcResult = number1 + number2;
                break;
            case 'subtract':
                calcResult = number1 - number2;
                break;
            case 'multiply':
                calcResult = number1 * number2;
                break;
            case 'divide':
                calcResult = number2 === 0 ? 'Błąd: Dzielenie przez zero!' : number1 / number2;
                break;
            default:
                calcResult = 'Błąd';
        }

        setResult(calcResult);
    };

    return (
        <div className="calculator">
            <h2>Kalkulator</h2>
            <input
                type="number"
                placeholder="Liczba 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Liczba 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div className="buttons">
                <button onClick={() => handleCalculation('add')}>+</button>
                <button onClick={() => handleCalculation('subtract')}>-</button>
                <button onClick={() => handleCalculation('multiply')}>*</button>
                <button onClick={() => handleCalculation('divide')}>/</button>
            </div>
            <div className="result">Wynik: <span>{result}</span></div>
        </div>
    );
};

export default Calculator;