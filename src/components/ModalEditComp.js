import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getBuildingTypes } from '../dataRequests/FetchData';
import Select from 'react-select'

const ModalEditComp = ({ showEditModal,handleCloseEditModal,buildItem}) => {

const[buildTypeList,setBuildTypeList] = useState();
const[selectedBuildType,setSelectedBuiltType] = useState();
const[selectedBuildCost,setSelectedBuildCost] = useState();
const[selecteConstructionTime,setSelecteConstructionTime] = useState();
const[selectedBuildName,setSelectedBuildName] = useState();


var options = [];

function fillOptions(){

buildTypeList &&  buildTypeList.forEach(element => {
    
  options.push({value:element.name,label:element.name})


  });
}
const handleSubmit = (event) => {
  event.preventDefault();
  handleCloseEditModal()
}

useEffect(()=>{
getBuildingTypes(setBuildTypeList);
},[])

useEffect(()=>{fillOptions()},[options])


  return (
 <>{buildItem &&    <Modal show={showEditModal} onHide={handleCloseEditModal}>

<form onSubmit={handleSubmit} >

 <Modal.Header closeButton>
   <Modal.Title>Edit {buildItem.name} item</Modal.Title>
 </Modal.Header>
 <Modal.Body>

 <div>

 </div>


 <div className="card">
  <div className="card-body">



      <div className="col-12">
        <label  className="form-label">Building Name</label>
        <input required value={buildItem.name} onChange={(e)=>setSelectedBuildName(e.target.value)} type="text" className="form-control" />
      </div>
      <div className="col-12">
        <label  className="form-label">Building Type</label>
        <Select required placeholder={buildItem.buildingType.name} onChange={(choise)=>setSelectedBuiltType(choise)} options={options} />
      </div>
      <div className="col-12">
        <label  className="form-label">Building Cost</label>
        <input required value={buildItem.buildingCost}  onChange={(e)=>setSelectedBuildCost(e.target.value)} type="number" min="1" className="form-control" />
      </div>
      <div className="col-12">
        <label  className="form-label">Construction Time</label>
        <input required value={buildItem.constructionTime}  onChange={(e)=>setSelecteConstructionTime(e.target.value)} type="number" min="30" max="1800" className="form-control" />
      </div>

  </div>
</div>

 </Modal.Body>
 <Modal.Footer>
   <Button variant="secondary" onClick={handleCloseEditModal}>
     Close
   </Button>
   <button className='btn btn-success' >
     Save Changes
   </button>
 </Modal.Footer>
 </form>
</Modal>

}</>
  )
}

export default ModalEditComp