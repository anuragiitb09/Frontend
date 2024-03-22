import React, { useState } from 'react';
import './Dashboard.css';
import profilePhoto from '../assets/wellsuit.png';

const DatabaseComponent = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [coordinatorDetails, setCoordinatorDetails] = useState({
    profilePhoto: '',
    name: '',
    studyYear: '',
  });

  const toggleFormModal = () => setFormOpen(!isFormOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCoordinatorDetails(prev => ({ ...prev, [name]: value }));
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(coordinatorDetails);
    toggleFormModal(); // Assuming you want to close the modal on submit
  };
  const handleClick = (label, value) => {
    console.log(`Clicked on ${label}: ${value}`);
  };

  const graphData = [
    { id: 1, name: 'Omkar', imageUrl: '../assets/wellsuit.png', coordinator: 'Coordinator 1' },
    // Add more data if needed
  ];

  return (
    <div className="database-component"> {/* Ensure this is the only top-level tag inside the return. */}
      <div className="profile-and-greeting-section">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h1 className="greeting-text">Hey Anurag,Manger</h1>
      </div>
      <div className="graph-section">
        {graphData.map((data) => (
          <div key={data.id} className="graph-item">
            <img src={profilePhoto} alt={data.name} className="graph-image" />
            <h2 className="graph-name">{data.name}</h2>
            <button
              className="coordinator-button"
              onClick={() => handleClick('Coordinator', data.coordinator)}
            >
              {data.coordinator}
            </button>
          </div>
        ))}
      </div>
      <div className="button-section">
        <button className="database-button">View your Database</button>
        
        <div>
          <button className="database-button" onClick={toggleModal}>Add Database</button>
          {isModalOpen && (
            <div className="modal">
              <h3>Submit Work</h3>
              <input type="file" accept=".pdf" />
              <input type="text" placeholder="Or enter a link" />
              <button onClick={toggleModal}>Submit</button>
              <button onClick={toggleModal}>Cancel</button>
            </div>
          )}
        </div>
        <button className="database-button" onClick={toggleFormModal}>Add Coordinator</button>
      </div>
      {isFormOpen && (
        <div className="form-modal">
          <form onSubmit={handleSubmit}>
            <label>
              Profile Photo:
              <input type="file" name="profilePhoto" onChange={handleInputChange} />
            </label>
            <label>
              Name:
              <input type="text" name="name" value={coordinatorDetails.name} onChange={handleInputChange} />
            </label>
            <label>
              Study Year:
              <input type="text" name="studyYear" value={coordinatorDetails.studyYear} onChange={handleInputChange} />
            </label>
            <label>
              Branch:
              <input type="text" name="Branch" value={coordinatorDetails.Branch} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={toggleFormModal}>Cancel</button>
          </form>
        </div>
      )}
    </div> // This closes the top-level <div>
  );
};

export default DatabaseComponent;
