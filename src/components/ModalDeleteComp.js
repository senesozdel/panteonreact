import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDeleteModal } from '../features/modals/ModalSlice'
import { setBuildDataList } from '../features/builds/BuildSlice'
import { deleteBuildingConfig,deleteBuildingType,getBuildingConfigList } from '../dataRequests/FetchData';
const ModalDeleteComp = () => {


  const dispatch = useDispatch();
  const buildItem = useSelector((state) => state.build.buildItem);
  const buildTypeItem = useSelector((state) => state.build.buildTypeItem);
  const showDeleteModal = useSelector((state) => state.modal.showDeleteModal);


  const handleCloseDeleteModal = () => {
    dispatch(setShowDeleteModal(false));
  };


  async function handleDeleteConfig(buildItem) {
    let buildId = buildItem.id;
    console.log(buildId)
    deleteBuildingConfig(buildId)
    handleCloseDeleteModal();

  }

  async function handleDeleteType(buildTypeItem) {
    let buildId = buildTypeItem.id;
    console.log(buildId)
    deleteBuildingType(buildId)
    handleCloseDeleteModal()

  }

console.log(buildItem)

  return (
 <>{buildItem &&    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>



 <Modal.Header closeButton>
   <Modal.Title>Delete {buildItem.name} item</Modal.Title>
 </Modal.Header>
 <Modal.Body>

 <p>Are you sure about deleting <span className='fw-bolder'>{buildItem.name}</span> item?</p>

 </Modal.Body>
 <Modal.Footer>
   <Button variant="danger" onClick={handleCloseDeleteModal}>
     Cancel
   </Button>
   <button onClick={()=>handleDeleteConfig(buildItem)} className='btn btn-success' >
     Yes
   </button>
 </Modal.Footer>

</Modal>
}
{
  buildTypeItem && <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>



  <Modal.Header closeButton>
    <Modal.Title>Delete {buildTypeItem.name} item</Modal.Title>
  </Modal.Header>
  <Modal.Body>
 
  <p>Are you sure about deleting <span className='fw-bolder'>{buildTypeItem.name}</span> item?</p>
 
  </Modal.Body>
  <Modal.Footer>
    <Button variant="danger" onClick={handleCloseDeleteModal}>
      Cancel
    </Button>
    <button onClick={()=>handleDeleteType(buildTypeItem)} className='btn btn-success' >
      Yes
    </button>
  </Modal.Footer>
 
 </Modal>
}

</>
  )
}

export default ModalDeleteComp