import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editBuildingConfig, editBuildingType, getBuildingTypes } from '../dataRequests/FetchData';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { setShowEditModal } from '../features/modals/ModalSlice'

const ModalEditComp = () => {

  // { showEditModal,handleCloseEditModal,buildItem}

  const [buildTypeList, setBuildTypeList] = useState();
  const [selectedBuildType, setSelectedBuiltType] = useState();
  const [selectedBuildCost, setSelectedBuildCost] = useState();
  const [selecteConstructionTime, setSelecteConstructionTime] = useState();
  const [selectedBuildName, setSelectedBuildName] = useState();

  const dispatch = useDispatch();
  const buildItem = useSelector((state) => state.build.buildItem);
  const buildTypeItem = useSelector((state) => state.build.buildTypeItem);
  const showEditModal = useSelector((state) => state.modal.showEditModal);

  var options = [];


  const handleCloseEditModal = () => {
    dispatch(setShowEditModal(false));
  };


  async function handleEditConfig(buildItem) {

    let payload = {
      id: buildItem.id,
      name: selectedBuildName,
      buildingTypeId: selectedBuildType,
      buildingCost: selectedBuildCost,
      constructionTime: selecteConstructionTime
    };
    console.log(payload)

    await editBuildingConfig(payload);


  }
  async function handleEditType(buildTypeItem) {

    let payload = {
      id: buildTypeItem.id,
      name: selectedBuildType

    };
    console.log(payload)

    await editBuildingType(payload);


  }

  function fillOptions() {

    buildTypeList && buildTypeList.forEach(element => {

      options.push({ value: element.id, label: element.name })


    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseEditModal()
  }


  useEffect(() => {
    getBuildingTypes((data) => dispatch(setBuildTypeList(data)));
  }, [dispatch]);

  useEffect(() => { fillOptions() }, [options])

  return (
    <>
    {buildItem &&
      <Modal show={showEditModal} onHide={handleCloseEditModal}>

        <form onSubmit={handleSubmit} >

          <Modal.Header closeButton>
            <Modal.Title>Edit {buildItem.name} item</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className="card">
              <div className="card-body">
                <div className="col-12">
                  <label className="form-label">Building Name</label>
                  <input required placeholder={buildItem.name} onChange={(e) => setSelectedBuildName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label">Building Type</label>
                  <Select required placeholder={buildItem.buildingType.name} onChange={(choise) => setSelectedBuiltType(choise.value)} options={options} />
                </div>
                <div className="col-12">
                  <label className="form-label">Building Cost</label>
                  <input required placeholder={buildItem.buildingCost} onChange={(e) => setSelectedBuildCost(e.target.value)} type="number" min="1" className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label">Construction Time</label>
                  <input required placeholder={buildItem.constructionTime} onChange={(e) => setSelecteConstructionTime(e.target.value)} type="number" min="30" max="1800" className="form-control" />
                </div>

              </div>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>
              Close
            </Button>
            <button onClick={() => handleEditConfig(buildItem)} className='btn btn-success' >
              Save Changes
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    }
    {
      buildTypeItem &&      
       <Modal show={showEditModal} onHide={handleCloseEditModal}>

      <form onSubmit={handleSubmit} >

        <Modal.Header closeButton>
          <Modal.Title>Edit {buildTypeItem.name} item</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="card">
            <div className="card-body">
              <div className="col-12">
                <label className="form-label">Building Name</label>
                <input required placeholder={buildTypeItem.name} onChange={(e) => setSelectedBuiltType(e.target.value)} type="text" className="form-control" />
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <button onClick={() => handleEditType(buildTypeItem)} className='btn btn-success' >
            Save Changes
          </button>
        </Modal.Footer>
      </form>
    </Modal>
    }
    </>
  )
}

export default ModalEditComp