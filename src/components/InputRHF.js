export default function InputRHF({labelText, inputType, errors, inputKey, inputRegistration}) {

    const errorMessage = getNestedValue(errors, inputKey)?.message;

    function getNestedValue(obj, key) {
        return key.split('.').reduce((acc, currentKey) => acc && acc[currentKey], obj);
    }

    return (
        <div className='input-group'>

            <label className="input-label" htmlFor={inputKey}>{labelText}</label>
            <input
                className="input-field"
                id={inputKey}
                type={inputType}
                {...inputRegistration}
            />
            {errorMessage && <p role="alert" className='input-error'>{errorMessage}</p>}
        </div>
    );
}