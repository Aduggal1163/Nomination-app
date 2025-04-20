import React, { useEffect, useState } from 'react';
import './Details.css';
import { useNavigate } from 'react-router-dom';

export default function Details() {
    const [data,setdata]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        const storeddata = JSON.parse(localStorage.getItem("data"))
        setdata(storeddata);
        console.log(storeddata);
    },[])
    const goback=()=>{
        navigate("/nomination-form")
    }
    return (
        <div className="details-container">
            <h1>Details</h1>
            <table className="details-table">
                <thead>
                    <tr>
                        <th>Candidate Name</th>
                        <th>Team Name</th>
                        <th>Description</th>
                        <th>Award Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.teamname}</td>
                        <td>{data.description}</td>
                        <td>{data.awardtype}</td>
                    </tr>
                </tbody>
            </table>
            <button className='detail-button' onClick={goback}>Back</button>
        </div>
    );
}
