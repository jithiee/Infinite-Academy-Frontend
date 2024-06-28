import React from 'react'
import Gallery from '../features/Management/components/Gallery'
import ManagementSidebar from '../features/Management/components/ManagementSidebar'
import AddClass from '../features/Management/components/AddClass'

const ManagementPage = () => {
  return (
    <>

         <ManagementSidebar/>
         <Gallery/>
         <AddClass/>

    </>
  )
}

export default ManagementPage