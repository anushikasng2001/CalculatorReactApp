import React, { useState } from 'react'

function HookCalculator() {

    const [input, setInput] = useState('')

    const display = (symbol) => {
        if(input === ''){
            if(['%', '*', '+', '-', '/', '0', '00'].includes(symbol)){
                setInput('')
            }else{
                setInput(prevInput => prevInput + symbol)
            }
        }else{
            if(input.charAt(input.length - 1)==='.' && symbol === '.'){
                setInput(input)
            }else{
                setInput(prevInput => prevInput + symbol)
            }
        }
    }

    return (
        <div>
            <table id="calc">
                <tr>
                    <td colspan="4">
                        <input type="text" value={input} onChange={event => setInput(event.target.value)} read-only />
                    </td>
                </tr>
                <tr>
                    <td><button id="c" onClick={() => setInput('')}>C</button></td>
                    <td><button id="mod" onClick={() => {display('%')}}>%</button></td>
                    <td><button id="back" onClick={() => setInput(prevInput => prevInput.slice(0,-1))}>←</button></td>
                    <td><button id="div" onClick={() => display('/')}>/</button></td>
                </tr>
                <tr>
                    <td><button id="1" onClick={() => { display(1) }}>1</button></td>
                    <td><button id="2" onClick={() => { display(2) }}>2</button></td>
                    <td><button id="3" onClick={() => { display(3) }}>3</button></td>
                    <td><button id="mul" onClick={() => { display('*') }}>*</button></td>
                </tr>
                <tr>
                    <td><button id="4" onClick={() => { display(4) }}>4</button></td>
                    <td><button id="5" onClick={() => { display(5) }}>5</button></td>
                    <td><button id="6" onClick={() => { display(6) }}>6</button></td>
                    <td><button id="sub" onClick={() => { display('-') }}>-</button></td>

                </tr>
                <tr>
                    <td><button id="7" onClick={() => { display(7) }}>7</button></td>
                    <td><button id="8" onClick={() => { display(8) }}>8</button></td>
                    <td><button id="9" onClick={() => { display(9) }}>9</button></td>
                    <td><button id="add" onClick={() => { display('+') }}>+</button></td>

                </tr>
                <tr>
                    <td><button id="00" onClick={() => { display('00') }}>00</button></td>
                    <td><button id="0" onClick={() => { display(0) }}>0</button></td>
                    <td><button id="dot" onClick={() => { display('.') }}>.</button></td>
                    <td><button id="eq" onClick={() => setInput(prevInput => eval(prevInput))}>=</button></td>
                </tr>
            </table>
        </div>
    )
}

export default HookCalculator
