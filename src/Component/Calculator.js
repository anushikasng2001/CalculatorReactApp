import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input: ''
      }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }    

    display = (symbol) => {
        this.setState((prevState) => {
            if(prevState.input === ''){
                if(['%', '*', '+', '-', '/', '0', '00'].includes(symbol)){
                    return {input: ''}
                }
            }else{
                if(prevState.input.charAt(prevState.input.length -1) === '.' && symbol === '.'){
                    return {input: prevState.input}
                }                               
            }
            return {input: prevState.input + symbol}
        })
    }

    clearScreen = () => {
        this.setState({
            input: ''
        })
    }

    back = () => {
        this.setState((prevState) => {
            return {input: prevState.input.slice(0, -1)}
        })
    }

    calculate = () => {
        this.setState((prevState) => {
                return {input: eval(prevState.input)}
            })
    }

  render() {
    return (
      <div>
            <table id="calc">
                <tr>
                    <td colspan="4">
                        <input type="text" value={this.state.input} onChange={this.handleChange} read-only />
                    </td>
                </tr>
                <tr>
                    <td><button id="c" onClick={() => { this.clearScreen() }}>C</button></td>
                    <td><button id="mod" onClick={() => { this.display('%') }}>%</button></td>
                    <td><button id="back" onClick={() => { this.back() }}>←</button></td>
                    <td><button id="div" onClick={() => { this.display('/') }}>/</button></td>
                </tr>
                <tr>
                    <td><button id="1" onClick={() => { this.display(1) }}>1</button></td>
                    <td><button id="2" onClick={() => { this.display(2) }}>2</button></td>
                    <td><button id="3" onClick={() => { this.display(3) }}>3</button></td>
                    <td><button id="mul" onClick={() => { this.display('*') }}>*</button></td>
                </tr>
                <tr>
                    <td><button id="4" onClick={() => { this.display(4) }}>4</button></td>
                    <td><button id="5" onClick={() => { this.display(5) }}>5</button></td>
                    <td><button id="6" onClick={() => { this.display(6) }}>6</button></td>
                    <td><button id="sub" onClick={() => { this.display('-') }}>-</button></td>

                </tr>
                <tr>
                    <td><button id="7" onClick={() => { this.display(7) }}>7</button></td>
                    <td><button id="8" onClick={() => { this.display(8) }}>8</button></td>
                    <td><button id="9" onClick={() => { this.display(9) }}>9</button></td>
                    <td><button id="add" onClick={() => { this.display('+') }}>+</button></td>

                </tr>
                <tr>
                    <td><button id="00" onClick={() => { this.display('00') }}>00</button></td>
                    <td><button id="0" onClick={() => { this.display(0) }}>0</button></td>
                    <td><button id="dot" onClick={() => { this.display('.') }}>.</button></td>
                    <td><button id="eq" onClick={() => { this.calculate() }}>=</button></td>
                </tr>
            </table>        
      </div>
    )
  }
}

export default Calculator
