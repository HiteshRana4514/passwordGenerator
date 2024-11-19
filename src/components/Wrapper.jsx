import react, {useState} from 'react'
import PasswordInput from './PasswodInput'
import RangeInput from './RangeInput'
import CapitalWords from './CapitalWords'
import SpecialChar from './SpecialChar'
import NumericChar from './NumericChar'
function Wrapper() {
    const [inputRangeValue, setInputRangeValue] = useState(10);
    const [inputSpecialChar, setInputSpecialChar] = useState(false);
    const [inputCapitalChar, setInputCapitalChar] = useState(false);
    const [inputNumericChar, setInputNumericChar] = useState(false);

    function handleRange(rangeValue){
        setInputRangeValue(rangeValue);
    }
    function handleSpecialChar(value){
        setInputSpecialChar(value)
    }
    function handleCapitalChar(value){
        setInputCapitalChar(value)
    }
    function handleNumericChar(value){
        setInputNumericChar(value);
    }
    

    return (
        <>
            <div className="wrapper">
                <div className="password-wrap">
                    <div className="password-block">
                        <div className="input-block">
                            <PasswordInput
                                rangeValue = {inputRangeValue}
                                capitalValue = {inputCapitalChar}
                                specialValue = {inputSpecialChar}
                                numericValue = {inputNumericChar}
                            />
                        </div>
                        <div className="password-tools">
                            <RangeInput
                                getRange = {handleRange}
                            />
                            <CapitalWords
                                getCaital = {handleCapitalChar}
                            />
                            <SpecialChar
                                getSpecial = {handleSpecialChar}
                            />
                            <NumericChar
                                getNumeric = {handleNumericChar}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wrapper