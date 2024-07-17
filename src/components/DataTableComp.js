import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setBuildItem,setBuildTypeItem } from '../features/builds/BuildSlice'
import { setShowEditModal, setShowDeleteModal } from '../features/modals/ModalSlice'
import { setUserList,setUserItem } from '../features/user/UserSlice'
import { useLocation } from 'react-router-dom';

const DataTableComp = () => {

  const location = useLocation();
  const currentPath = location.pathname; 

  const dispatch = useDispatch();
  const buildDataList = useSelector((state) => state.build.buildDataList);
  const userList = useSelector((state) => state.user.userList);
  const buildTypeList = useSelector((state) => state.build.buildTypeList);

  const modalType = useSelector((state)=>state.modal.modalType)

  const handleShowDeleteModal = () => {
    dispatch(setShowDeleteModal(true));
  };

  const handleShowEditModal = () => {
    dispatch(setShowEditModal(true));
  };


  const openEditConfigModal = (buildItem) => {
    dispatch(setBuildItem(buildItem))
    handleShowEditModal()
  }

  const openDeleteConfigModal = (buildItem) => {
    dispatch(setBuildItem(buildItem))
    handleShowDeleteModal()
  }

  const openEditTypeModal = (buildTypeItem) => {
    dispatch(setBuildTypeItem(buildTypeItem))
    handleShowEditModal()
  }

  const openDeleteTypeModal = (buildTypeItem) => {
    dispatch(setBuildTypeItem(buildTypeItem))
    handleShowDeleteModal()
  }

  

console.log(currentPath)
console.log(buildDataList)
console.log(buildTypeList)

  return (
<>
{
  currentPath === "/buildConfigs" ?
  <section className="section">
  <div className="row">
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Build Configuration List</h5>
          <table className="table datatable table-hover">
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>Building Type</th>
                <th>Building Cost</th>
                <th>Constraction Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                buildDataList && buildDataList.map((i, index) =>
                  <tr key={index}>
                    <td>{i.name}</td>
                    <td>{i.buildingType.name}</td>
                    <td>{i.buildingCost}</td>
                    <td>{i.constructionTime}</td>
                    <td className='d-flex gap-2 '>
                      <Link onClick={() => openDeleteConfigModal(i)} ><i className='bi bi-trash text-danger'></i></Link>
                      <Link onClick={() => openEditConfigModal(i)} ><i className='bi bi-gear text-secondary'></i></Link>
                    </td>
                  </tr> 
                ) 
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </section>
  : currentPath === "/buildType" ?
  <section className="section">
  <div className="row">
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Build Type List</h5>
          <table className="table datatable table-hover">
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Building Type Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                buildTypeList && buildTypeList.map((i, index) =>
                  <tr key={index}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td className='d-flex gap-2 '>
                      <Link onClick={() => openDeleteTypeModal(i)} ><i className='bi bi-trash text-danger'></i></Link>
                      <Link onClick={() => openEditTypeModal(i)} ><i className='bi bi-gear text-secondary'></i></Link>
                    </td>
                  </tr> 
                ) 
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </section>
  :
  <section className="section">
  <div className="row">
    <div className="col-lg-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Member List</h5>
          <table className="table datatable table-hover">
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Name
                </th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>

              {
                userList && userList.map((i, index) =>
                  <tr key={index}>
                    <td>{i.id}</td>
                    <td>{i.userName}</td>
                    <td>{i.email}</td>

                  </tr> 
                ) 
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </section>
}

  

</>

  )
}

export default DataTableComp