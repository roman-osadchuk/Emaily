import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {

    return (
      <div className="footer_container">
        The app is created by Roman Osadchuk
        <Link to="/github" >
            <i className="fab fa-github"></i>
        </Link>
      </div>
    );
}
