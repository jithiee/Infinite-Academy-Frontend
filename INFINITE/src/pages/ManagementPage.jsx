import React from 'react'
import Gallery from '../features/Management/components/Gallery'
import ManagementSidebar from '../features/Management/components/ManagementSidebar'
import AddClass from '../features/Management/components/AddClass'
import ListStudents from '../features/Management/components/ListStudents'
import ListTeachers from '../features/Management/components/ListTeachers'
import ApproveLeaveTeachers from '../features/Management/ApproveLeaveTeachers'

const ManagementPage = () => {
  return (
    <>

         {/* <ManagementSidebar/> */}
         <ListTeachers/>
          <ApproveLeaveTeachers/>
         <ListStudents/>
         <Gallery/>
         <AddClass/>

    </>
  )
}

export default ManagementPage