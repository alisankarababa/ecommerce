
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

function InputRHF({labelText, inputType, errors, inputKey, inputRegistration}) {

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


function SingUpForm({roles, onSubmit}) {
    
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({mode: "onBlur", shouldUnregister: true});

    const [isSubmitInProgress, setIsSubmitInProgress] = useState(false);

    if(roles.length === 0) {
        
        return (
            <div className='py-[5rem] flex justify-center items-center'>
                <div className="w-10 h-10 rounded-full animate-spin border-4 border-solid border-clr-primary border-t-transparent"></div>
            </div>
        );
    }

    const defaultSelected = roles.find((role) => role.name === "Müşteri");
    const storeSelectItem = roles.find(role => role.name === "Mağaza");

    function submit(data) {
        
        onSubmit(data, setIsSubmitInProgress);

    }


    return (

        <div className='bg-bgclr-light'>
            <div className='max-w-[400px] m-auto px-[1rem] py-[5rem] sm:py-[10rem]'>
                <form className="m-auto" onSubmit={handleSubmit(submit)}>
                    <div >
                        
                        <InputRHF
                            labelText="Name"
                            inputType="text"
                            inputKey="name"
                            errors={errors}
                            inputRegistration= {
                                register("name",
                                {
                                    required: {
                                        value: true,
                                        message: "Name is required."
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Name should be at least 3 characters long."
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Name cannot be longer than 30 characters."
                                    }
                                })
                            }
                        />
                        
                        <InputRHF 
                            labelText="Email"
                            inputKey="email"
                            inputType="email"
                            errors={errors}
                            inputRegistration={
                                register("email",
                                {
                                    required: {
                                        value: true,
                                        message: "Email is required."
                                    },
                                    minLength: {
                                        value: 15,
                                        message: "Email must be at least 15 characters long."
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Email cannot be longer than 100 characters."
                                    },
                                    pattern: {
                                        value: /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Invalid email"
                                    }
                                })
                            }
                        />
                            
                        <InputRHF
                            labelText="Password"
                            inputKey="password"
                            inputType="password"
                            errors={errors}
                            inputRegistration={
                                register("password",
                                {
                                    required: {
                                        value: true,
                                        message: "Password is required."
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long."
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Password cannot be longer than 30 characters."
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/,
                                        message: "Password must contain at least one number, one lower case letter, one upper case letter and a special character."
                                    }
                                })
                            }
                        />

                        <InputRHF
                            labelText="Confirm Password"
                            inputKey="confirm_password"
                            inputType="password"
                            errors={errors}
                            inputRegistration={
                                register("confirm_password",
                                {
                                    validate: (fieldValue) => {
                                        return watch("password") === fieldValue || "Password does not match.";
                                    }
                                })
                            }
                        />

                        <div className='input-group'>
                            <label className="input-label" htmlFor='role_id'>Role</label>
                            <select
                                className="input-field"
                                id='role_id'
                                defaultValue={defaultSelected.id}
                                {...register("role_id")}
                            >
                                {
                                    roles.map( role => {
                                        return <option value={role.id} key={role.id}>{role.name}</option>
                                    })
                                }
                            </select>
                        </div>

                        {
                            Number(watch("role_id")) === storeSelectItem.id &&
                            
                            (
                                <>
                                <InputRHF
                                    labelText="Store Name"
                                    inputKey="store.name"
                                    inputType="text"
                                    errors={errors}
                                    inputRegistration={
                                        register("store.name",
                                        {
                                            required: {
                                                value: true,
                                                message: "Store Name is required."
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Store Name should be at least 3 characters long."
                                            },
                                            maxLength: {
                                                value: 30,
                                                message: "Store Name cannot be longer than 30 characters."
                                            }
                                        })
                                    }
                                />

                                <InputRHF
                                    labelText="Store Phone"
                                    inputKey="store.phone"
                                    errors={errors}
                                    inputType="tel"
                                    inputRegistration={
                                        register("store.phone",
                                        {
                                            required: {
                                                value: true,
                                                message: "Phone number is required"
                                            },
                                            pattern: {
                                                value: /^((\+|00)90|0)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
                                                message: "Invalid phone number"
                                            }
                                        })
                                    }
                                />

                                <InputRHF
                                    labelText="Store Tax Number"
                                    inputKey="store.tax_no"
                                    errors={errors}
                                    inputType="text"
                                    inputRegistration={
                                        register("store.tax_no",
                                        {
                                            required: {
                                                value: true,
                                                message: "Store Tax Number is required."
                                            },
                                            pattern: {
                                                value: /^T\d{4}V\d{6}$/,
                                                message: "Invalid tax number"
                                            }
                                        })
                                    }
                                />

                                <InputRHF
                                    labelText="Store IBAN"
                                    inputKey="store.bank_account"
                                    errors={errors}
                                    inputType="text"
                                    inputRegistration={
                                        register("store.bank_account",
                                        {
                                            required: {
                                                value: true,
                                                message: "Store IBAN is required."
                                            },
                                            pattern: {
                                                value: /^TR\d{2}\s?(\d{4}\s?){1}(\d{1})(\d{3}\s?)(\d{4}\s?){3}(\d{2})\s?$/,
                                                message: "Invalid IBAN"
                                            }
                                        })
                                    }
                                />

                                </>
                            )
                        }
                    </div>
                    { !isSubmitInProgress && <input disabled={ !isValid } className='btn-small w-full btn-primary disabled:opacity-50 hover:cursor-pointer' type="submit" /> }
                    { isSubmitInProgress &&
                        <div className='btn-primary btn-small flex justify-center items-center'>
                            <div className="w-5 h-5 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
                        </div>
                    }
                    
                </form>
            </div>
        </div>
    );
}


export default function SignUp() {
    
    const instanceAxios = axios.create({
        baseURL: 'https://workintech-fe-ecommerce.onrender.com',
        timeout: 1000,
    });

    const [roles, setRoles] = useState([]);
    
    useEffect(()=>{
        instanceAxios.get("/roles")
        .then((response)=> {
            setRoles(response.data);
        })
        .catch((error)=> {
            console.log(error);
        })

    }, []);

    function onSubmit(data, setIsSubmitInProgress) {

        setIsSubmitInProgress(true);
        const chosenRole = roles.find( role => {
            return role.id === Number(data.role_id);
        })

        if(!chosenRole)
            return;

        let requestBody;

        if(chosenRole.name === "Mağaza") {

            requestBody = {};
            requestBody.name = data.name;
            requestBody.email = data.email;
            requestBody.password = data.password;
            requestBody.role_id = Number(data.role_id);

            requestBody.store = {};
            requestBody.store.name = data.store_name;
            requestBody.store.phone = data.phone;
            requestBody.store.tax_no = data.tax_no;
            requestBody.store.bank_account = data.bank_account;
        } else {
            requestBody = {...data};
            delete requestBody.confirm_password;
        }

        instanceAxios.post("/signup", requestBody)
        .then((response)=> {
            console.log(response);
            setTimeout(()=> {
                toast.success('Signed you up successfully!');
            }, 1000)            
        })
        .catch((error)=> {
            console.log(error);
            setTimeout(()=> {
                toast.error('Signup failed.');
            }, 1000)
        })
        .finally(() => {
            setTimeout(()=> {
                setIsSubmitInProgress(false);
            }, 1000)
        })
    }

    return (
        <SingUpForm roles={roles} onSubmit={onSubmit}/>
    );

}



              




