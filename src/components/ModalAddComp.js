import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getBuildingTypes, addBuildingConfig,addBuildingType,addNewUser } from '../dataRequests/FetchData';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { setShowAddModal } from '../features/modals/ModalSlice'
import { setBuildTypeList,setBuildDataList } from '../features/builds/BuildSlice'



const ModalAddComp = () => {


  const [selectedBuildType, setSelectedBuiltType] = useState();
  const [selectedBuildCost, setSelectedBuildCost] = useState();
  const [selectedConstructionTime, setSelecteConstructionTime] = useState();
  const [selectedBuildName, setSelectedBuildName] = useState();
  const [newUserName, setNewUserName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();


  const dispatch = useDispatch();

  const showAddModal = useSelector((state) => state.modal.showAddModal);
  const buildTypeList = useSelector((state) => state.build.buildTypeList);
  const modalType = useSelector((state)=>state.modal.modalType)

  const handleCloseAddModal = () => {
    dispatch(setShowAddModal(false));
  };

  console.log(modalType)

  var options = [];

  function fillOptions() {

    if(buildTypeList){
      buildTypeList.forEach(element => {

        options.push({ value: element.id, label: element.name })
  
  
      });
    }

  }


  async function handleAddConfig() {
    let payload = {
      name: selectedBuildName,
      buildingTypeId: selectedBuildType,
      buildingCost: selectedBuildCost,
      constructionTime: selectedConstructionTime
    };
    addBuildingConfig(payload)

    
  }
  async function handleAddType() {
    let payload = {
      name: selectedBuildType
    };
    addBuildingType(payload)

    
  }
  async function handleAddUser() {
    let payload = {
      userName: newUserName,
      email: newEmail,
      password: newPassword
    };
    addNewUser(payload)

    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    handleCloseAddModal()
  }



  useEffect(() => {
    getBuildingTypes((data) => dispatch(setBuildTypeList(data)));
  }, [dispatch]);

console.log(buildTypeList)

  useEffect(() => { fillOptions() }, [options])


  return (

    <>
{
    modalType === "addConfig" ?
        <Modal show={showAddModal} onHide={handleCloseAddModal}>

            <form onSubmit={handleSubmit} >

                <Modal.Header closeButton>
                    <Modal.Title>Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card">
                        <div className="card-body">

                            <div className="col-12">
                                <label className="form-label">Building Name</label>
                                <input
                                    onChange={(e) => setSelectedBuildName(e.target.value)}
                                    required type="text" className="form-control" />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Building Type</label>
                                <Select
                                    onChange={(choise) => setSelectedBuiltType(choise.value)} required options={options} />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Building Cost</label>
                                <input
                                    onChange={(e) => setSelectedBuildCost(e.target.value)} required type="number" min="1" className="form-control" />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Construction Time</label>
                                <input
                                    onChange={(e) => setSelecteConstructionTime(e.target.value)} required type="number" min="30" max="1800" className="form-control" />
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Close
                    </Button>
                    <button onClick={handleAddConfig} className='btn btn-success' >
                        Save Changes
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
        : modalType === "addBuildType" ?
        <Modal show={showAddModal} onHide={handleCloseAddModal}>

                <form onSubmit={handleSubmit} >

                    <Modal.Header closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="card">
                            <div className="card-body">
                                <div className="col-12">
                                    <label className="form-label">Building Type Name</label>
                                    <input
                                        onChange={(e) => setSelectedBuiltType(e.target.value)}
                                        required type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseAddModal}>
                            Close
                        </Button>
                        <button onClick={handleAddType} className='btn btn-success' >
                            Save Changes
                        </button>
                    </Modal.Footer>
                </form>
        </Modal> 
        :
        <Modal show={showAddModal} onHide={handleCloseAddModal}>

                <form onSubmit={handleSubmit} >

                    <Modal.Header closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="card">
                            <div className="card-body">

                                <div className="col-12">
                                    <label className="form-label">UserName</label>
                                    <input
                                        onChange={(e) => setNewUserName(e.target.value)}
                                        required type="text" className="form-control" />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Email</label>
                                    <input
                                        onChange={(e) => setNewEmail(e.target.value)} required type="email" className="form-control" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Password</label>
                                    <input
                                        onChange={(e) => setNewPassword(e.target.value)} required type="password" className="form-control" />
                                </div>

                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseAddModal}>
                            Close
                        </Button>
                        <button onClick={handleAddUser} className='btn btn-success' >
                            Save Changes
                        </button>
                    </Modal.Footer>
                </form>
         </Modal>

}
      


      </>
  )
}

export default ModalAddComp