import react, { useState, useEffect } from 'react'

function CapitalWords({getCaital}){
    const [capitalValue, setCapitalValue] = useState(false);

    function handleCapitalValue(){
        setCapitalValue(!capitalValue);
    }
    useEffect(()=>{
        getCaital(capitalValue);
    },[capitalValue])
    
    return(
        <>
            <div className="capital-block">
                <input type="checkbox" name="capital-input" id="capital-word" onChange={handleCapitalValue} />
                <label htmlFor="capital-word">Capital Characters</label>
            </div>
        </>
    )
}

export default CapitalWords