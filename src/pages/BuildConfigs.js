import React, { useEffect, useState } from 'react'
import DataTableComp from '../components/DataTableComp'
import ModalAddComp from '../components/ModalAddComp'
import { getBuildingConfigList } from '../dataRequests/FetchData'
import { Link } from 'react-router-dom'
import ModalDeleteComp from '../components/ModalDeleteComp'
import ModalEditComp from '../components/ModalEditComp'
import { useDispatch, useSelector } from 'react-redux';
import { setBuildDataList} from '../features/builds/BuildSlice'
import { setShowAddModal,setModalType } from '../features/modals/ModalSlice'
const BuildConfigs = () => {


  const dispatch = useDispatch();

  const buildDataList = useSelector((state) => state.build.buildDataList);

  const handleShowAddModal = () => {
    dispatch(setModalType("addConfig"))
    dispatch(setShowAddModal(true));
  };


  useEffect(() => {
    getBuildingConfigList((response) => dispatch(setBuildDataList(response)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setModalType("showConfigList"))
  }, [dispatch]);
  
console.log(buildDataList)
  return (
    <div>
      <Link onClick={()=>handleShowAddModal()} ><i className='ri-add-circle-fill fs-1'  ></i></Link>
{

  
  buildDataList &&
  
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

export default BuildConfigs