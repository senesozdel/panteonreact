import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { setShowAddModal,setModalType } from '../features/modals/ModalSlice'
import { useDispatch, useSelector } from 'react-redux';

const SidebarComp = ({handleLogout}) => {

const dispatch = useDispatch();

const handleShowAddConfigModal = () => {
  dispatch(setModalType("addConfig"))
  dispatch(setShowAddModal(true));
};
const handleShowAddTypeModal = () => {
  dispatch(setModalType("addBuildType"))
  dispatch(setShowAddModal(true));
};

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " >
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" data-bs-target="#users-nav" data-bs-toggle="collapse" >
            <i className="bi bi-person" /><span>Users</span><i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul id="users-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/teamMembers" >
                <i className="bi bi-people fs-6" /><span>Team Members</span>
              </Link>
            </li>


          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" data-bs-target="#buildingTypes-nav" data-bs-toggle="collapse" >
            <i className="bi bi-journal-text" /><span>Building Types</span><i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul id="buildingTypes-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/buildType">
                <i className="bi bi-list fs-6" /><span>Show Building Types</span>
              </Link>
            </li>
            <li>
              <Link onClick={()=>handleShowAddTypeModal()}  >
                <i className="bi bi-plus fs-6" /><span>Add New Building Type</span>
              </Link>
            </li>

          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" data-bs-target="#buildingConfig-nav" data-bs-toggle="collapse" >
            <i className="bi bi-layout-text-window-reverse" /><span>Building Configurations</span><i className="bi bi-chevron-down ms-auto" />
          </Link>
          <ul id="buildingConfig-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/buildConfigs">
                <i className="bi bi-list fs-6" /><span>Show Building Configurations</span>
              </Link>
            </li>
            <li>
              <Link onClick={()=>handleShowAddConfigModal()} >
                <i className="bi bi-plus fs-6" /><span>Add New Building Configuration</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Quick Links</li>

        
        <li onClick={handleLogout} className="nav-item">
          <Link  className="nav-link collapsed" >
            <i className="bi bi-box-arrow-in-right" />
            <span>Logout</span>
          </Link>
        </li>


      </ul>
    </aside>

  )
}

export default SidebarComp