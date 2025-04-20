import React, { useState } from 'react';
import './NominationForm.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function NominationForm() {
    const [name, setname] = useState("");
    const [teamname, setteamname] = useState("");
    const [description, setdescription] = useState("");
    const [awardtype, setawardtype] = useState("");
    const [data,setdata]=useState({});
    const navigate = useNavigate();

    const saveToLocalStorage = () => {
        const formData = {
            name,
            teamname,
            description,
            awardtype
        };
        if(name=='' || teamname=='' || description=='' || awardtype=='') return;
        localStorage.setItem("data", JSON.stringify(formData));
    };

    const onsave = () => {
        if (!name || !teamname || !description || !awardtype) {
            toast.error("Please fill in all fields before proceeding.")
            return;
        }
        console.log(name, teamname, description, awardtype);
        saveToLocalStorage();
        toast.success("Your form has been successfully submitted!")
        clearForm();
    };

    const onnext = (e) => {
        e.preventDefault();
        const storeddata = JSON.parse(localStorage.getItem("data"))
        if(!storeddata || storeddata.name =='' || storeddata.teamname =='' || storeddata.description =='' || storeddata.awardtype =='')
            {
                toast.error("Please fill in all fields before proceeding.")
                return;
            }
        console.log(name, teamname, description, awardtype);
        saveToLocalStorage();
        navigate("/details");
        clearForm();
    };

    const clearForm = () => {
        setname("");
        setteamname("");
        setdescription("");
        setawardtype("");
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Nominate Team Member</h1>
            <form className="nomination-form">
                <label htmlFor="name">Candidate Name <span className='req'>*</span></label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                />

                <label htmlFor="team">Team Name <span className='req'>*</span></label>
                <input
                    type="text"
                    id="team"
                    placeholder="Enter team name"
                    value={teamname}
                    onChange={(e) => setteamname(e.target.value)}
                    required
                />

                <label htmlFor="description">Nomination Description <span className='req'>*</span></label>
                <textarea
                    id="description"
                    placeholder="Type here..."
                    rows="4"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    required
                ></textarea>

                <label htmlFor="award">Award Type <span className='req'>*</span></label>
                <select
                    id="award"
                    value={awardtype}
                    onChange={(e) => setawardtype(e.target.value)}
                    required
                >
                    <option value="">-- Select Award Type --</option>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Full Stack</option>
                    <option>DevOps</option>
                    <option>UI/UX</option>
                    <option>Team Player</option>
                    <option>Best Intern</option>
                </select>

                <div className="button-group">
                    <button type="button" onClick={onsave}>Save</button>
                    <button type="submit" onClick={onnext}>Next</button>
                </div>
            </form>
        </div>
    );
}
