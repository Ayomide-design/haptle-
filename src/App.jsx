import React from 'react'
import './App.css'
import TopNav from './component/TopNav';
import Sidebar from './component/sidebar';
import DashboardContent from './component/DashboardContent';


function App(){  
  return (
    <>
    <div className="max-w-[100vw] flex h-screen overflow-x-hidden">
      <div className='w-64'>
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <TopNav />
        <DashboardContent/>
      </div>
      
    </div>
    </>
  );
}
export default App;
