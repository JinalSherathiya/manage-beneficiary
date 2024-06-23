import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BackIcon from "../../../assets/images/back-icon.png"

const ViewBeneficiary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const beneficiary = useSelector(state => state.beneficiaries.find(b => b.id === id));

  const redirectHome = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (!beneficiary) {
      navigate("/")
    }
  },[beneficiary,navigate])

  return (
    <>
        <div className='topSection'>
            <img src={BackIcon} onClick={redirectHome} alt='icon' className='backIcon' />  
            <h1>Beneficiary Details</h1>
        </div>
        <ul className='viewBeneficiary'> 
            <li><strong>Full Name:</strong> <span>{beneficiary.fullName}</span></li>
            <li><strong>Address:</strong> <span>{beneficiary.address}</span></li>
            <li><strong>Country:</strong> <span>{beneficiary.country}</span></li>
            <li><strong>Pincode:</strong> <span>{beneficiary.pincode}</span></li>
            <li><strong>Account Number:</strong> <span>{beneficiary.account_number}</span></li>
            <li><strong>Bank Name:</strong> <span>{beneficiary.bank_name}</span></li>
            <li><strong>Account Type:</strong> <span>{beneficiary.account_type}</span></li>
        </ul>
    </>
  );
}

export default ViewBeneficiary;