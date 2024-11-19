import react, { useEffect, useState } from 'react'

function NumericChar({getNumeric}){
    const [numericValue, setNumericValue] = useState(false);
    function handleNumericValue(){
        setNumericValue(!numericValue);
    }
    useEffect(()=>{
        getNumeric(numericValue);
    },[numericValue])
    return(
        <>
            <div className="numeric-block">
                <input type="checkbox" name="numeric-input" id="numeric-word" onChange={handleNumericValue}/>
                <label htmlFor="numeric-word">Numbers</label>
            </div>
        </>
    )
}

export default NumericChar