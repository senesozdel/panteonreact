import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DataTableComp = ({handleShowDeleteModal,handleShowEditModal,buildDataList,setBuildItem}) => {

  const openEditModal =(buildItem)=>{
    setBuildItem(buildItem)
    handleShowEditModal()
  }
  
  const openDeleteModal =(buildItem)=>{
    setBuildItem(buildItem)
    handleShowDeleteModal()
  }

  return (

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
  buildDataList && buildDataList.map((i,index)=>
    <tr key={index}>
    <td>{i.name}</td>
    <td>{i.buildingType.name}</td>
    <td>{i.buildingCost}</td>
    <td>{i.constructionTime}</td>
    <td className='d-flex gap-2 '>
      <Link onClick={()=>openDeleteModal(i)} ><i className='bi bi-trash text-danger'></i></Link>
      <Link onClick={()=>openEditModal(i)} ><i className='bi bi-gear text-secondary'></i></Link>
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
  
  )
}

export default DataTableComp