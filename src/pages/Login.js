import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreatorUserLogin } from "../store/actions/actionsUser";
import InputRHF from "../components/InputRHF";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm({ onSubmit }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur"});

    const isSubmitInProgress = useSelector( store => store.reducerUser.isLoggingInInProgress );

	function submit(data) {
		onSubmit(data);
	}



	return (
		<div className="bg-bgclr-light">
			<div className="max-w-[400px] m-auto px-[1rem] py-[5rem] sm:py-[10rem]">
				<form className="m-auto" onSubmit={handleSubmit(submit)}>
					<div>
						<InputRHF
							labelText="Email"
							inputKey="email"
							inputType="email"
							errors={errors}
							inputRegistration={register("email", {
								required: {
									value: true,
									message: "Email is required.",
								},
								pattern: {
									value:
										/^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "Invalid email",
								},
							})}
						/>

						<InputRHF
							labelText="Password"
							inputKey="password"
							inputType="password"
							errors={errors}
							inputRegistration={register("password", {
                                required: {
                                    value: true,
									message: "Password is required.",
                                }
                            })}
						/>
					</div>
					{!isSubmitInProgress && (
						<input
							disabled={!isValid}
							className="btn-small w-full btn-primary disabled:opacity-50 hover:cursor-pointer"
							type="submit"
						/>
					)}
					{isSubmitInProgress && (
						<div className="btn-primary btn-small flex justify-center items-center">
							<div className="w-5 h-5 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}

export default function Login() {

    const history = useHistory();
    const dispatch = useDispatch();
    let location = useLocation();

    let fromPath  = location.state && location.state.from.pathname;

    
    function onSubmit(data) {

        const requestBody = {...data};
        delete requestBody.confirm_password;

        function isLoginSuccessFullCallBack(isLoginSuccessFull) {
            
            if(isLoginSuccessFull) {
                toast.success("Login succesfull!");
                if(fromPath) {
                    history.push(fromPath);

                } else {
                    history.push("/home");
                }
            }

            else
                toast.error("Login failed!")
        }

        dispatch(actionCreatorUserLogin(requestBody, isLoginSuccessFullCallBack));
    }

    return (
        <LoginForm onSubmit={onSubmit}/>
    );

}
