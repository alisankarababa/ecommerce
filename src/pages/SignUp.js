
import React from 'react';
import { useForm } from 'react-hook-form';

function SignUpCustomer() {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({mode: "onBlur"});
    const onSubmit = data => console.log(data);

    return (

        <div className='bg-bgclr-light'>
            <div className='max-w-[400px] m-auto px-[1rem] py-[5rem] sm:py-[10rem]'>
                <form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <div className='input-group'>
                            <label className="input-label" htmlFor="name">Name</label>
                            <input
                                className="input-field"
                                id='name'
                                type="text"
                                {...register("name",
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
                                    }
                                )}
                            />
                            {errors.name && <p role="alert" className='input-error'>{errors.name?.message}</p>}
                        </div>
            
                        <div className='input-group'>
                            <label className="input-label" htmlFor="email">Email</label>
                            <input
                                className="input-field"
                                id='email'
                                type="email"
                                {...register("email",
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
                                    }
                                )}
                            />
                            {errors.email && <p className='input-error'>{errors.email.message}</p>}
                        </div>

                        <div className='input-group'>
                            <label className="input-label" htmlFor='password'>Password</label>
                            <input
                                className="input-field"
                                id='password'
                                type="password"
                                {...register("password",
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
                                    }
                                )}
                            />
                            {errors.password && <p className='input-error'>{errors.password.message}</p>} 
                        </div>

                        <div className='input-group'>
                            <label className="input-label" htmlFor='confirm-password'>Confirm Password</label>
                            <input
                                className="input-field"
                                id='confirm-password'
                                type="password"
                                {...register("confirm_password",
                                    {
                                        validate: (fieldValue) => {
                                            return watch("password") === fieldValue || "Password does not match.";
                                        }
                                    }
                                )}
                            />
                            {errors.confirm_password && <p className='input-error'>{errors.confirm_password.message}</p>} 
                        </div>

                        <div className='input-group'>
                            <label className="input-label" htmlFor='role'>Role</label>
                            <select
                                className="input-field"
                                id='role'
                                {...register("role")}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                            </select>
                            {errors.role && <p className='input-error'>{errors.role.message}</p>} 
                        </div>
                    </div>
                    <input disabled={!isValid} className='btn btn-small-wide btn-primary disabled:opacity-50' type="submit" />
                </form>
            </div>
        </div>
    );
}


export default function SignUp() {
    
    return (
        <SignUpCustomer />
    );

}



              




