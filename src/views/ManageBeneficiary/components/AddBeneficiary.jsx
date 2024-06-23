import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBeneficiary } from '../../../store';
import { v4 as uuidv4 } from 'uuid';
import FormComponent from './FormComponent';
import BackIcon from "../../../assets/images/back-icon.png";
import { notification } from 'antd';

const AddBeneficiary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.id = uuidv4();
    dispatch(addBeneficiary(data));
    notification.success({
        message: 'Added Beneficiary',
        duration: 3, 
      })
    navigate('/');
  };

  const redirectHome = () => {
    navigate(-1)
  }

  return (
    <>
      <div className='topSection'>
        <img src={BackIcon} onClick={redirectHome} alt='icon' className='backIcon' />  
        <h1>Add Beneficiary</h1>
      </div>
        <FormComponent onSubmit={onSubmit} type="add"/>
    </>
  );
}

export default AddBeneficiary;