import react, { useEffect, useState } from 'react'

function PasswordInput({ rangeValue, capitalValue, specialValue, numericValue }) {
    const [passwordValue, setPasswordValue] = useState('Your Password');

    useEffect(() => {
        const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
        const capitalAlphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
        const specialCharsArray = ["#", "$", "%", "&", "?", "@"];
        const numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        let characterPool = [...alphabetArray];
        if(capitalValue) characterPool = [...characterPool, ...capitalAlphabetArray];
        if(specialValue) characterPool = [...characterPool, ...specialCharsArray];
        if(numericValue) characterPool = [...characterPool, ...numericArray];


        let passwordString = '';

        for(let i=0;i<rangeValue;i++){
            const randomNo = Math.floor(Math.random() * (characterPool.length));
            passwordString += characterPool[randomNo];
            
        }
        setPasswordValue(passwordString)


    }, [rangeValue, capitalValue, specialValue, numericValue])

    function handleCopy(){
        navigator.clipboard.writeText(passwordValue).then(()=>{
            alert('Password copied to clipboard!')
        })
    }


    return (
        <>
            <div className="form-block">
                <input type="text" name="password" id="random-password" readOnly value={passwordValue} />
                <button type="button" className='copy-button' onClick={handleCopy}>
                    <i className='copy-icon'></i>
                </button>
            </div>
        </>
    )
}

export default PasswordInput