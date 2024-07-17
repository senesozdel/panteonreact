import React, { useEffect, useState } from 'react'
import DataTableComp from '../components/DataTableComp'
import ModalAddComp from '../components/ModalAddComp'
import { getUsers} from '../dataRequests/FetchData'
import { Link } from 'react-router-dom'
import ModalDeleteComp from '../components/ModalDeleteComp'
import ModalEditComp from '../components/ModalEditComp'
import { useDispatch, useSelector } from 'react-redux';
import { setShowAddModal,setModalType } from '../features/modals/ModalSlice'
import { setUserList } from '../features/user/UserSlice'

const TeamMembers = () => {

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.user.userList);
  const modalType = useSelector((state) => state.modal.modalType);

  const handleShowAddModal = () => {
    dispatch(setModalType("addUser"))
    dispatch(setShowAddModal(true));
  };

  useEffect(() => {
    getUsers((response) => dispatch(setUserList(response)));
  }, [dispatch]);

  
  useEffect(() => {
    dispatch(setModalType("showUserList"))
  }, [dispatch]);

console.log(modalType)
console.log(userList)
  return (
    <div>
      <Link onClick={()=>handleShowAddModal()} ><i className='ri-add-circle-fill fs-1'  ></i></Link>
{

  
userList &&
  
  <div>
  <DataTableComp  />
  <ModalAddComp  />
  <ModalDeleteComp   />
  <ModalEditComp   />



  </div>

}  


</div>
      
  )
}

export default TeamMembers