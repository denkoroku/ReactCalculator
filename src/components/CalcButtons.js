import React from "react";


const CalcButtons = () => {
    return (
    <div className="calculator-buttons">
        <input id="running_total" value="0" disabled="disabled"></input>
        <table>
        <tr>
            <td>
            <button id="number7">7</button>
            </td>
            <td>
            <button id="number8">8</button>
            </td>
            <td>
            <button id="number9">9</button>
            </td>
            <td><button id="operator_add">+</button></td>
        </tr>
        <tr>
            <td>
            <button id="number4">4</button>
            </td>
            <td>
            <button id="number5">5</button>
            </td>
            <td>
            <button id="number6">6</button>
            </td>
            <td>
                <button id="operator_subtract">-</button>
            </td>
        </tr>
        <tr>
            <td>
            <button id="number7">1</button>
            </td>
            <td>
            <button id="number8">2</button>
            </td>
            <td>
            <button id="number9">3</button>
            </td>
            <td>
                <button id="operator_multiply">*</button>
            </td>
        </tr>
        <tr>
            <td>
                <button id="clear">C</button>
            </td>
            <td>
                <button id="number0">0</button>
            </td>
            <td>
                <button id="operator_equals">=</button>
            </td>
            <td>
                <button id="operator_divide">/</button>
            </td>
        </tr>
        </table>
    </div>
    );
};

export default CalcButtons;