import './App.css';
import { useState } from 'react';
import Navbar_apps from './Navbar_apps';
import Footer_apps from './Footer_apps';
import Left_apps from './Left_apps';
import Right_apps from './Right_apps';
import Header_apps from './Header_apps';

function Apps() {

    return (
        <div className="Apps">
            <Header_apps />
            <Navbar_apps />
            <div className="container mt-5">
                <div className="row">
                    <Left_apps />
                    <Right_apps />
                </div>
            </div>
            <Footer_apps />
        </div>

    );
}

export default Apps;