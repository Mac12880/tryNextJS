import React, { useState } from 'react'

const Calculator = () => {
    const [tempVar, setTempVar] = useState('')
    const [total, setTotal] = useState('')

    const calculate = () => {
        try{
            const result = eval(tempVar)
            setTotal(`= ${result}`)


        } catch (error) {
            setTempVar('Error')
        }
    }

    const handleClick = (e) => {
        if(total != '') {
            setTempVar('') 
            setTotal('')
            setTempVar(e.target.value)
        }
        else {
            setTempVar(tempVar + e.target.value)
        }
        
    }

    const handleClear = () => {
        setTempVar('') 
        setTotal('')
    }

    return (

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

                <section>
                    <div className='header'>
                        <h1><u>Calculator</u></h1>
                    </div>
                    <div className="calculator card">

                        <input type="text" className="calculator-screen z-depth-1" value={tempVar} onChange={(e) => setTempVar(e.target.value)} />
                        <input type="text" className="calculator-screen z-depth-1" value={total} disabled />

                        <div className="calculator-keys">

                            <button type="button" className="operator btn btn-info" value=" + " onClick={handleClick}>+</button>
                            <button type="button" className="operator btn btn-info" value=" - " onClick={handleClick}>-</button>
                            <button type="button" className="operator btn btn-info" value=" * " onClick={handleClick}>*</button>
                            <button type="button" className="operator btn btn-info" value=" / " onClick={handleClick}>/</button>

                            <button type="button" value="7" className="btn btn-light waves-effect" onClick={handleClick}>7</button>
                            <button type="button" value="8" className="btn btn-light waves-effect" onClick={handleClick}>8</button>
                            <button type="button" value="9" className="btn btn-light waves-effect" onClick={handleClick}>9</button>


                            <button type="button" value="4" className="btn btn-light waves-effect" onClick={handleClick}>4</button>
                            <button type="button" value="5" className="btn btn-light waves-effect" onClick={handleClick}>5</button>
                            <button type="button" value="6" className="btn btn-light waves-effect" onClick={handleClick}>6</button>


                            <button type="button" value="1" className="btn btn-light waves-effect" onClick={handleClick}>1</button>
                            <button type="button" value="2" className="btn btn-light waves-effect" onClick={handleClick}>2</button>
                            <button type="button" value="3" className="btn btn-light waves-effect" onClick={handleClick}>3</button>


                            <button type="button" value="0" className="btn btn-light waves-effect" onClick={handleClick}>0</button>
                            <button type="button" className="decimal function btn btn-secondary" value="." onClick={handleClick}>.</button>
                            <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={handleClear}>
                            AC
                            </button>

                            <button type="button" className="equal-sign operator btn btn-default" value="=" onClick={() => calculate()}>=</button>

                        </div>
                    </div>
                    
                </section>
            </div>
        </main>
    )
}

export default Calculator