import react, { useEffect, useState } from 'react'

function RangeInput({getRange}){
    const [rangeValue, setRangeValue] = useState(10)
    useEffect(()=>{
        getRange(rangeValue);
    },[rangeValue])
   

    return(
        <>
            <div className="range-block">
                <input type="range" name="input-range" id="password-range" min="5" max="20" step={1} value={rangeValue} onChange={(e)=>{setRangeValue(e.target.value)}}/>
                <span className="password-length">Length:- <span className="length-value">{rangeValue}</span></span>
            </div>
        </>
    )
}

export default RangeInput