import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBeneficiary } from '../../../store';
import EditIcon from "../../../assets/images/edit-icon.png";
import ViewIcon from "../../../assets/images/view-icon.png";
import DeleteIcon from "../../../assets/images/delete-icon.png";
import { Modal } from 'antd';

const ListBeneficiary = () => {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
  
    const showModal = (id) => {
        setId(id)
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };

    const beneficiaries = useSelector(state => state.beneficiaries);
    const dispatch = useDispatch();

    const handleRemove = () => {
        setOpen(false);
        dispatch(removeBeneficiary(id));
    };


    return (
    <>
        <div className='topSection'>
            <h1>Manage Beneficiaries</h1>
        </div>
        <div className='addBeneficiaryLink'>
            <Link to="/add">Add New Beneficiary</Link>
        </div>
        {
            beneficiaries.length > 0 ?
            <ul className='beneficiaryList'>
                <li>
                    <div className='name'><strong>Full Name</strong></div>
                    <div className='accNum'><strong>Account Number</strong></div>             
                    <div className='action'></div>
                </li>
                {beneficiaries.map(item => (
                <li key={item.id}>
                    <div className='name'>{item.fullName}</div>
                    <div className='accNum'>{item.account_number}</div>             
                    <div className='action'>
                        <Link to={`/view/${item.id}`} className='actionBtn'><img src={ViewIcon} alt='Icon' /></Link>
                        <Link to={`/edit/${item.id}`} className='actionBtn'><img src={EditIcon} alt='Icon' /></Link>
                        <button onClick={() => showModal(item.id)} className='actionBtn'><img src={DeleteIcon} alt='Icon' /></button>
                    </div>
                </li>
                )) }
            </ul>
            : <p className='noFoundText'>Not any Beneficiary added</p>
        }

        <Modal
            title="Delete Beneficiary"
            centered
            open={open}
            onOk={handleRemove}
            onCancel={hideModal}
            okText="Yes"
            cancelText="Cancel"
        >
            <p>Are you sure you want to remove this beneficiary?</p>
        </Modal>
    </>
  );
}

export default ListBeneficiary;