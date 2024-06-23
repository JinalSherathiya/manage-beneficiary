import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBeneficiary } from '../../../store';
import FormComponent from './FormComponent';
import BackIcon from "../../../assets/images/back-icon.png";
import { notification } from 'antd';

const EditBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    data.id = id;
    dispatch(updateBeneficiary(data));
    notification.success({
      message: 'Updated Beneficiary',
      duration: 3, 
    })
    navigate('/');
  };

  const redirectHome = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (beneficiary.length <= 0) {
      navigate("/")
    }
  },[beneficiary,navigate])

  return (
    <>
      <div className='topSection'>
        <img src={BackIcon} onClick={redirectHome} alt='icon' className='backIcon' />  
        <h1>Update Beneficiary</h1>
      </div>
      <FormComponent onSubmit={onSubmit} type="edit" />
    </>
  );
}

export default EditBeneficiary;