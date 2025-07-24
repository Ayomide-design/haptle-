import React from 'react'
import './App.css'
import TopNav from './component/TopNav';
import Sidebar from './component/sidebar';


function App(){  
  return (
    <>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopNav />
      </div>
    </div>
    </>
  );
}
export default App;
