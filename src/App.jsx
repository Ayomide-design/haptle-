import React from 'react'
import './App.css'
import TopNav from './component/TopNav';
import Sidebar from './component/sidebar';
import PageContent from './component/PageContent';
import DashboardContent from './component/DashboardContent';


function App(){  
  return (
    <>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopNav />
        <PageContent/>
        <DashboardContent/>
      </div>
      
    </div>
    </>
  );
}
export default App;
