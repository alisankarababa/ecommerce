
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatorGlobalFetchRoles } from '../store/actions/actionsGlobal';
import { api } from '../api/api';
import InputRHF from '../components/InputRHF';

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
                                    maxLength: {
                                        value: 80,
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
                                defaultValue={defaultSelected?.id}
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
                            Number(watch("role_id")) === storeSelectItem?.id &&
                            
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
    
    const roles = useSelector( store => store.reducerGlobal.roles );
    
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(roles.length === 0)
            dispatch(actionCreatorGlobalFetchRoles());
    }, []);

    function onSubmit(data, setIsSubmitInProgress) {

        const requestBody = {...data};
        delete requestBody.confirm_password;

        setIsSubmitInProgress(true);
        api.post("/signup", requestBody)
        .then((response)=> {
            console.log(response);
                toast.success("Click the link sent to your email address to activate your account!");
                history.goBack();
        })
        .catch((error)=> {
            console.log(error);
                toast.error('Signup failed!')
        })
        .finally(() => {
                setIsSubmitInProgress(false);
        })
    }

    return (
        <SingUpForm roles={roles} onSubmit={onSubmit}/>
    );
}



              




