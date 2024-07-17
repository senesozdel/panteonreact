import React, { useEffect, useState } from 'react'
import DataTableComp from '../components/DataTableComp'
import ModalAddComp from '../components/ModalAddComp'
import { getBuildingConfigList, getBuildingTypes } from '../dataRequests/FetchData'
import { Link } from 'react-router-dom'
import ModalDeleteComp from '../components/ModalDeleteComp'
import ModalEditComp from '../components/ModalEditComp'
import { useDispatch, useSelector } from 'react-redux';
import { setBuildDataList, setBuildTypeList} from '../features/builds/BuildSlice'
import { setShowAddModal,setModalType } from '../features/modals/ModalSlice'

const BuildType = () => {

  const dispatch = useDispatch();

  const buildTypeList = useSelector((state) => state.build.buildTypeList);
  const modalType = useSelector((state) => state.modal.modalType);

  const handleShowAddModal = () => {
    dispatch(setModalType("addBuildType"))
    dispatch(setShowAddModal(true));
  };


  useEffect(() => {
    getBuildingTypes((response) => dispatch(setBuildTypeList(response)));
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(setModalType("showTypeList"))
  }, [dispatch]);

console.log(modalType)
  return (
    <div>
      <Link onClick={()=>handleShowAddModal()} ><i className='ri-add-circle-fill fs-1'  ></i></Link>
{

  
  buildTypeList &&
  
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

export default BuildType