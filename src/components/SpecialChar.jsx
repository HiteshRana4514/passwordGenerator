import react, { useState, useEffect } from 'react'

function SpecialChar({getSpecial}){
    const [specialValue, setSpecialValue] = useState(false);

    function handleSpecialValue(){
        setSpecialValue(!specialValue);
    }
    useEffect(()=>{
        getSpecial(specialValue);
    },[specialValue])
    
    return(
        <>
            <div className="special-block">
                <input type="checkbox" name="special-input" id="special-word" onChange={handleSpecialValue}/>
                <label htmlFor="special-word">Special Characters</label>
            </div>
        </>
    )
}
export default SpecialChar