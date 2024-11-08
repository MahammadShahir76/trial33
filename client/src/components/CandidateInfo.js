import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './CandidateInfo.css';

const CandidateInfo = () => {
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [graduationyear, setgraduationyear] = useState('');
    const [workingas, setworkingas] = useState('');
    const [experience, setexperience] = useState('');
    const [domain, setdomain] = useState('');
    const [specialisation, setspecialisation] = useState('');
    const [Error, setError] = useState(false);

    const navigate = useNavigate();

    const addSenior = async () => {
        if (!name || !contact || !graduationyear || !workingas || !experience || !domain || !specialisation) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('User'))._id;

        let result = await fetch('http://localhost:5000/add-seniorInfo', {
            method: 'post',
            body: JSON.stringify({ name, contact, graduationyear, workingas, experience, domain, specialisation, userId }),
            headers: { 'Content-type': 'application/json' },
        });
        result = await result.json();
    };

    return (
        <div className="candidate-info-container">
            <h1>Alumni Profile</h1>

            <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon1" />
                <input type="text" placeholder="Enter full name" onChange={(e) => setname(e.target.value)} value={name} />
                {Error && !name && <span>Enter valid name</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faPhone} className="input-icon1" />
                <input type="number" placeholder="Enter contact number" onChange={(e) => setcontact(e.target.value)} value={contact} />
                {Error && !contact && <span>Enter valid number</span>}
            </div>

            {/* Graduation Date Picker */}
            <div className="input-container">
                <FontAwesomeIcon icon={faGraduationCap} className="input-icon1" />
                <input
                    type="date"
                    placeholder="Enter graduation date"
                    onChange={(e) => setgraduationyear(e.target.value)}
                    value={graduationyear}
                />
                {Error && !graduationyear && <span>Enter valid graduation date</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faBriefcase} className="input-icon1" />
                <input type="text" placeholder="Currently Working as" onChange={(e) => setworkingas(e.target.value)} value={workingas} />
                {Error && !workingas && <span>Enter valid working profile</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faBriefcase} className="input-icon1" />
                <input type="number" placeholder="Enter number of experience" onChange={(e) => setexperience(e.target.value)} value={experience} />
                {Error && !experience && <span>Enter valid experience</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faBriefcase} className="input-icon1" />
                <input type="text" placeholder="Enter domain" onChange={(e) => setdomain(e.target.value)} value={domain} />
                {Error && !domain && <span>Enter valid domain</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faGraduationCap} className="input-icon1" />
                <input type="text" placeholder="Enter specialisation" onChange={(e) => setspecialisation(e.target.value)} value={specialisation} />
                {Error && !specialisation && <span>Enter valid specialisation</span>}
            </div>

            <div className="button-container">
                <button type="button" onClick={addSenior}>Add</button>
                <button><Link to="/DomainSelection" className="next-link4">Next</Link></button>
                <Link to="/PastDomain" className="next-link1">recall</Link>
            </div>
        </div>
    );
};

export default CandidateInfo;
