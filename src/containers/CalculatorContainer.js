import React, { Component } from 'react';
import CalcButtons from '../components/CalcButtons'

class CalculatorContainer extends Component {
    render() {
        return (
        <div id="calculatorContainer">
        <CalcButtons />
        </div>
    );
    }
}

export default CalculatorContainer;
