import React from 'react';
import Sidebar from './sidebar';
import Gestion from './Gestion';
import Topbar from './Topbar';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <Topbar />
            <div className="content">
                <Sidebar />
                <div className="main-content">
                <Gestion></Gestion>
                </div>
              
            </div>
        </div>
    );
};

export default App;