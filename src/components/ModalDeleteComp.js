import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalDeleteComp = ({ buildItem,handleCloseDeleteModal,showDeleteModal}) => {






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
   <button className='btn btn-success' >
     Yes
   </button>
 </Modal.Footer>

</Modal>

}</>
  )
}

export default ModalDeleteComp