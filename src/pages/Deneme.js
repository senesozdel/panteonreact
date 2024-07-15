import React, { useEffect, useState } from 'react'
import DataTableComp from '../components/DataTableComp'
import ModalAddComp from '../components/ModalAddComp'
import { getBuildingConfigList } from '../dataRequests/FetchData'
import { Link } from 'react-router-dom'
import ModalDeleteComp from '../components/ModalDeleteComp'
import ModalEditComp from '../components/ModalEditComp'
const Deneme = () => {

  const[buildItem,setBuildItem] = useState(null)
  const[buildDataList,setBuildDataList] = useState();
  const [showAddModal, setshowAddModal] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseAddModal = () => setshowAddModal(false);
  const handleCloseDeleteModal = () => setshowDeleteModal(false);
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowAddModal = () => setshowAddModal(true);
  const handleShowDeleteModal = () => setshowDeleteModal(true);
  const handleShowEditModal = () => setShowEditModal(true);


useEffect(()=>{

  getBuildingConfigList(setBuildDataList)

},[])

  return (
    <div>
      <Link onClick={handleShowAddModal} ><i className='ri-add-circle-fill fs-1'  ></i></Link>
{
  


  
  buildDataList &&
  
  <div>
  <DataTableComp  setBuildItem={setBuildItem} handleShowEditModal={handleShowEditModal} handleShowDeleteModal={handleShowDeleteModal} buildDataList={buildDataList}/>
  <ModalAddComp  buildItem={buildItem} showAddModal={showAddModal} handleCloseAddModal={handleCloseAddModal} />
  <ModalDeleteComp  buildItem={buildItem} showDeleteModal={showDeleteModal} handleCloseDeleteModal={handleCloseDeleteModal} />
  <ModalEditComp  buildItem={buildItem} showEditModal={showEditModal} handleCloseEditModal={handleCloseEditModal} />



  </div>

}  


</div>
      
  )
}

export default Deneme