import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const FormComponent = ({onSubmit,type}) => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries.find(b => b.id === id));
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: beneficiary });

  const validateNumberAndSpace = (value) => {
    if (!value) return "This field is required";
    return /^[0-9\s]*$/.test(value) || "Not valid";
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formControl'>
          <label>Full Name</label>
          <input {...register('fullName', { required: true })} />
          {errors.fullName && <span className='errorMsg'>This field is required</span>}
        </div>

        <div className='formControl'>
          <label>Address</label>
          <input {...register('address', { required: true })} />
          {errors.address && <span className='errorMsg'>This field is required</span>}
        </div>

        <div className='formControl'>
          <label>Country</label>
          <select {...register('country', { required: true })}>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
          </select>
          {errors.country && <span className='errorMsg'>This field is required</span>}
        </div>

        <div className='formControl'>
          <label>Pincode</label>
          <input {...register('pincode', { required: true, validate: validateNumberAndSpace })} />
          {errors.pincode && <span className='errorMsg'>{errors.pincode.message}</span>}
        </div>

        <div className='formControl'>
          <label>Account Number</label>
          <input {...register('account_number', { required: true, validate: validateNumberAndSpace })} />
          {errors.account_number && <span className='errorMsg'>{errors.account_number.message}</span>}
        </div>

        <div className='formControl'>
          <label>Bank Name</label>
          <input {...register('bank_name', { required: true })} />
          {errors.bank_name && <span className='errorMsg'>This field is required</span>}
        </div>

        <div className='formControl'>
          <label>Account Type</label>
          <input {...register('account_type', { required: true })} />
          {errors.account_type && <span className='errorMsg'>This field is required</span>}
        </div>

        <div className='submitWrap'>
            <button type="submit" className='primaryBtn'>{type === "add" ? "Add Beneficiary" : "Update Beneficiary"}</button>
        </div>
      </form>
    </>
  );
}

export default FormComponent;