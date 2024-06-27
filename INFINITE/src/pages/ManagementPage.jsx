import React from 'react'
import Gallery from '../features/Management/components/Gallery'
import ManagementSidebar from '../features/Management/components/ManagementSidebar'
import AddClass from '../features/Management/components/AddClass'
import ListStudents from '../features/Management/components/ListStudents'

const ManagementPage = () => {
  return (
    <>

         {/* <ManagementSidebar/> */}
         <ListStudents/>
         <Gallery/>
         <AddClass/>

    </>
  )
}

export default ManagementPage