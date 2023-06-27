import React, { Component } from 'react';
//stateless functional component
const NavBar = ({totalCounters}) =>{
console.log('Navbar - rendered');

    return (
        // <nav className="navbar bg-body-tertiary">
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge rounded-pill bg-secondary">
                        {/* {props.totalCounters} */}
                        {totalCounters}
                    </span> 
                </a>
            </div>
        </nav>
    );
}

export default NavBar;