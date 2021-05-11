import React from 'react'
import App from "../../../App.css";

const Footer = () => {
    return (
        <div className="main-footer" >
            <div className="container" >
                <div className="row" >
                    <p className="col-sm" align="center">
                        Fernando Vincentius Sean Piay | Back-end Web Development | &copy;{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;