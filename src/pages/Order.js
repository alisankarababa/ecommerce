import { useEffect, useState } from "react";
import AddressCard from "../components/AddressCard";
import { useForm } from 'react-hook-form';
import OrderSummaryBox from "../components/OrderSummaryBox";
import InputRHF from "../components/InputRHF";
import { useDispatch, useSelector } from "react-redux";
import { actionCreatorFetchAddresses, actionCreatorSaveAddress } from "../store/actions/actionsUser";
import { toast } from "react-toastify";

function AddAddressForm({ hCloseForm, hSubmit}) {

    const {
		register,
		handleSubmit,
        reset,
		formState: { errors, isValid },
	} = useForm();

    useEffect(() => {
        return (() => {
            reset();
        })
    }, [])

	return (
		<form
			className="p-[1rem] gap-[1rem] flex items-top flex-wrap border-[1px] rounded-[5px]"
			onSubmit={handleSubmit(hSubmit)}
		>
			<div className="grow-[2] basis-[100%]">
				<InputRHF
					labelText="Address Title"
					inputKey="title"
					inputType="text"
					errors={errors}
					inputRegistration={register("title")}
				/>
			</div>
			<div className="grow-[1] basis-[200px]">
				<InputRHF
					labelText="Name"
					inputKey="name"
					inputType="text"
					errors={errors}
					inputRegistration={register("name")}
				/>
			</div>
			<div className="grow-[1] basis-[200px]">
				<InputRHF
					labelText="Surname"
					inputKey="surname"
					inputType="text"
					errors={errors}
					inputRegistration={register("surname")}
				/>
			</div>
			<div className="grow-[1] basis-[200px]">
				<InputRHF
					labelText="Phone"
					inputKey="phone"
					inputType="text"
					errors={errors}
					inputRegistration={register("phone")}
				/>
			</div>
			<div className="grow-[1] basis-[200px]">
				<InputRHF
					labelText="City"
					inputKey="city"
					inputType="text"
					errors={errors}
					inputRegistration={register("city")}
				/>
			</div>
			<div className="grow-[1] basis-[200px]">
				<InputRHF
					labelText="District"
					inputKey="district"
					inputType="text"
					errors={errors}
					inputRegistration={register("district")}
				/>
			</div>
			<div className="grow-[1] basis-[200px]">
				<InputRHF
					labelText="Neighborhood"
					inputKey="neighborhood"
					inputType="text"
					errors={errors}
					inputRegistration={register("neighborhood")}
				/>
			</div>
			<div className="grow-[2] basis-[100%]">
            <div className='input-group'>
                <label className="input-label" htmlFor="address">Address</label>
                <textarea
                    className="input-field"
                    id="address"
                    {...register("address")}
                />
                </div>
			</div>
            <button
                className="btn btn-danger ml-auto px-[2em] py-[.75em] rounded-[5px]"
                type="submit"
                onClick={hCloseForm}
            >Close</button>
			<input
				className="btn btn-primary px-[2em] py-[.75em] rounded-[5px]"
				type="submit"
			/>
		</form>
	);
}

function AddressDisplay({hOpenPopUpAddressForm, addressList, hSelectedAddress}) {

    const [ chosenAddressId, setChosenAddressId ] = useState(addressList[0] ? 0 : null);
    const [ isMatchingBillingAddress, setIsMatchingBillingAddress ] = useState(false);

    useEffect(() => {
        hSelectedAddress(addressList[chosenAddressId]);
    }, [chosenAddressId])

	return (
		<div className="p-[1rem] border-[1px] rounded-[5px] text-clr-dark">
            <div className="mb-[2rem] flex justify-between items-center">
                <h2 className="font-semibold text-[1.5rem]">Teslimat Adresi</h2>
                <label>
                    <input type="checkbox" checked={isMatchingBillingAddress} onChange={e => setIsMatchingBillingAddress(e.target.checked)}/>
                    {" "}Faturamı Aynı Adrese Gönder
                </label>
            </div>
			<div className="grid md:grid-cols-2 auto-rows-[200px] gap-[1rem]">
                <div
                    className=""
                    onClick={hOpenPopUpAddressForm}
                >
                    <div className="h-[20%]"></div>
                    <div className="border-[1px] rounded-[5px] flex justify-center items-center hover:cursor-pointer h-[80%]">
                        <i className="fa-solid fa-plus border-[1px] rounded-full p-3"></i>
                    </div>
				</div>
				{addressList.map((addressObj, idx) => (
					<div key={addressObj.id} className="flex flex-col">
						<div className="h-[20%] flex justify-between items-center">
							<label>
								<input
									type="radio"
									name={`radio-btn-address`}
									value={idx}
                                    checked={chosenAddressId === idx}
                                    onChange={(e) => setChosenAddressId(Number(idx))}
								/>{" "}
								{addressObj.title}
							</label>
							<button className="underline">Düzenle</button>
						</div>
						<div className="h-[80%] p-[1rem] border-[1px] rounded-[5px] flex-grow-[4]">
							<AddressCard address={addressObj} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function PaymentDisplay() {

    return (
        <div>
            <CreditCardForm />
        </div>
    );
}

function CreditCardForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    months.unshift("Ay");

    const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() + index);
    years.unshift("Yıl")
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputRHF
					labelText="Kart Numarası"
					inputKey="card_number"
					inputType="text"
					errors={errors}
					inputRegistration={register("card_number")}
				/>
				<InputRHF
					labelText="Kart Sahibi"
					inputKey="card_holder"
					inputType="text"
					errors={errors}
					inputRegistration={register("card_holder")}
				/>
				<div className="flex justify-between">
					<div className="basis-[250px]">
						<label className="input-label" htmlFor="expiration-date">Son Kullanma Tarihi</label>
						<div className="grid grid-cols-2 gap-[1rem]" id="expiration-date">
							<select
								className="border-[1px] rounded-[5px] py-[.75em] px-[.25em]"
								id="expirationMonth"
								{...register("expirationMonth", { required: true })}
							>
								{months.map((month) => (
									<option key={month} value={month}>
										{month}
									</option>
								))}
							</select>
							{errors.expirationMonth && (
								<span>Expiration month is required</span>
							)}
							<select
								className="border-[1px] rounded-[5px] py-[.75em] px-[.25em]"
								id="expirationYear"
								{...register("expirationYear", { required: true })}
							>
								{years.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
							{errors.expirationYear && (
								<span>Expiration year is required</span>
							)}
						</div>
					</div>
					<div>
						<InputRHF
							labelText="CVV"
							inputKey="cvv"
							inputType="text"
							errors={errors}
							inputRegistration={register("cvv")}
						/>
					</div>
				</div>

				<input
					className="btn btn-primary btn-small"
					type="submit"
					name="Submit"
				/>
			</form>
		);
};

function SelectPaymentOrAddress({
	selectedAddress,
	addressOrPayment,
	setAddressOrPayment,
}) {
	const selectedAddressOrPaymentDiv = {
		boxShadow: "0px 7px 4px -2px rgba(35, 166, 240, 1)",
	};

	const nonSelectedAddressOrPaymentDiv = {
		boxShadow: "0px 7px 4px -2px rgba(0, 0, 0, .5)",
	};

	return (
		<div className="grid md:grid-cols-2 auto-rows-[150px] gap-[1rem] mb-[2rem]">
			<div
				className="border-[1px] rounded-[5px] p-[1rem]"
				onClick={(e) => setAddressOrPayment("address")}
				style={
					addressOrPayment === "address"
						? selectedAddressOrPaymentDiv
						: nonSelectedAddressOrPaymentDiv
				}
			>
				<h2 className="text-clr-primary text-[1.25rem] text-left">
					Adres Bilgileri
				</h2>
				{selectedAddress && (
					<div className="text-left">
                        <h4>{selectedAddress.title.toUpperCase()}</h4>
                        <p>{selectedAddress.address} {selectedAddress.district}/{selectedAddress.city}</p>
					</div>
				)}
			</div>
			<div
				className="border-[1px] rounded-[5px] p-[1rem]"
				value="payment"
				onClick={() => setAddressOrPayment("payment")}
				style={
					addressOrPayment === "payment"
						? selectedAddressOrPaymentDiv
						: nonSelectedAddressOrPaymentDiv
				}
			>
				<h2 className="text-clr-primary text-[1.25rem] text-left">
					Ödeme Seçenekleri
				</h2>
			</div>
		</div>
	);
}



export default function Order() {
	const dispatch = useDispatch();
	const [isFormOpen, setIsFormOpen] = useState(false);

	const [selectedAddress, setSelectedAddress] = useState(null);
	const [addressOrPayment, setAddressOrPayment] = useState("address");

	function hSelectedAddress(argSelectedAddress) {
		setSelectedAddress(argSelectedAddress);
	}

	function isSavingAddressSuccessfull(isSuccess) {
		if (isSuccess) {
			toast.success("Adres kaydedildi!");
			dispatch(actionCreatorFetchAddresses());
			setIsFormOpen(false);
		} else {
			toast.error("Adres kaydı yapılırken hata oluştu!");
		}
	}

	function hSubmitAddressForm(formData) {
		dispatch(actionCreatorSaveAddress(formData, isSavingAddressSuccessfull));
	}

	useEffect(() => {
		dispatch(actionCreatorFetchAddresses());
	}, []);

	const addressList = useSelector((store) => store.reducerUser.addressList);

	return (
		<div className="container-big my-[5rem] relative">
			<div className="flex gap-[1.5rem] flex-wrap">
				<div className="grow-[4] basis-[600px] ">
					<SelectPaymentOrAddress
						selectedAddress={selectedAddress}
						addressOrPayment={addressOrPayment}
						setAddressOrPayment={setAddressOrPayment}
					/>
					{addressOrPayment === "address" ? (
						<AddressDisplay
							hOpenPopUpAddressForm={() => setIsFormOpen(true)}
							addressList={addressList}
							hSelectedAddress={hSelectedAddress}
						/>
					) : (
                        <PaymentDisplay />
					)}
				</div>
				<div className="grow-[1] basis-[200px]">
					<OrderSummaryBox />
				</div>
			</div>
			{isFormOpen && (
				<div className="absolute lg:left-[50%] lg:translate-x-[-50%] top-0  bg-bgclr-ligth-gray-1">
					<AddAddressForm
						hCloseForm={() => setIsFormOpen(false)}
						hSubmit={hSubmitAddressForm}
					/>
				</div>
			)}
		</div>
	);
}




