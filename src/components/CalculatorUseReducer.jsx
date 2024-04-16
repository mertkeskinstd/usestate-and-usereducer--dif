import { useReducer } from "react";
import { initialState, reducer } from "./reducers/reducerCalculator";





const CalculatorUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleNumber1Change =(e)=>{
        dispatch({type:"SET_NUMBER1",payload:Number(e.target.value)})
    }
    const handleNumber2Change =(e)=>{
        dispatch({type:"SET_NUMBER2",payload:Number(e.target.value)})
    }
    const handleEdition=()=>{
        dispatch({type:"SET_RESULT",payload: state.number1 + state.number2})
    }



    return (
        <div className="calculator-container">
            <h1>UseReducer</h1>
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="number1" className="form-label">Number1</label>
                    <input type="number" className="form-input" id="number1" value={state.number1} onChange={handleNumber1Change} />

                </div>
                <div className="form-group">
                    <label htmlFor="number2" className="form-label">Number2</label>
                    <input type="number" className="form-input" id="number2" value={state.number2} onChange={handleNumber2Change} />
                </div>
                <button className="form-button" onClick={handleEdition}>Add</button>
                <div className="form-group">
                    <label htmlFor="result" className="form-label">Result</label>
                    <input type="number" className="form-input" id="result" readOnly value={state.result} />

                </div>
            </div>
        </div>
    )
}

export default CalculatorUseReducer;