import React from 'react';
import { SideNav } from './components/SideNav';
import {Route,Routes} from "react-router-dom"
import { Home } from './components/Home';



function App() {
  return (
    <div className="prose md:prose-lg lg:prose-xl prose-h2:text-primary row justify-between">
      <SideNav className='flex-none' />
      <div className='grow row'>
      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
