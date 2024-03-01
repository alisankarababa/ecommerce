export default function InputRHF({labelText, inputType, errors, inputKey, inputRegistration, children}) {

    const errorMessage = getNestedValue(errors, inputKey)?.message;

    function getNestedValue(obj, key) {
        return key.split('.').reduce((acc, currentKey) => acc && acc[currentKey], obj);
    }
    
    const renderInput = () => {
        switch (inputType) {
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'date':
                return <input className="input-field" id={inputKey} type={inputType} {...inputRegistration} />;
            case 'select':
                return (
                    <select className="input-field" id={inputKey} {...inputRegistration}>
                        {children}
                    </select>
                );
            case 'radio':
                return (
                    <input className="input-field" id={inputKey} type={inputType} {...inputRegistration} />
                );

            default:
                return <input className="input-field" id={inputKey} type="text" {...inputRegistration} />;
        }
    };

    return (
        <div className='input-group'>
            {
                labelText &&
                <label className="input-label" htmlFor={inputKey}>{labelText}</label>
            }
            {renderInput()}
            {errorMessage && <p role="alert" className='input-error'>{errorMessage}</p>}
        </div>
    );
}