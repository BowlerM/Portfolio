import React from "react";

const Websrapi = () => {

    return(
        <div className="webscrapi-content">
            <h2 className="header-title">Generalised No Code Webscraper</h2>
            <p>Solo backend developer for Webscrapi. Built using FastAPI to create a RESTful API along with MySQL database for storage.</p>
            
            <h3>Features</h3>
            <ul>
                <li>JWT Authentication.</li>
                <li>Endpoints for user creation and account manipulation.</li>
                <li>Admin endpoints.</li>
                <li>Webscraping through our SQL inspired language using a drag and drop feature on the frontend e.g. 
                    <ul style={{marginTop: "12px"}}>
                        <li>SELECT ALL</li>
                        <li>SELECT h1 WITH class OF main-header</li>
                        <li>EXPORT AS csv</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}   

export default Websrapi