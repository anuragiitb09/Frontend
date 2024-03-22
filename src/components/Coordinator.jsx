import React, { useState } from 'react';
import './Coordinator.css'; // Ensure to create and import the CSS file for styles
import profilePhoto from '../assets/wellsuit.png'; // Adjust the path as necessary

const CoordinatorComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [previousWorks, setPreviousWorks] = useState([
        { id: 1, title: 'Project 1', description: 'Description 1' },
        // Add more previous works as needed
    ]);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    // Placeholder functions for delete, edit, and share
    const deleteWork = (id) => {
        // Logic to delete work by id
        setPreviousWorks(previousWorks.filter(work => work.id !== id));
    };

    const editWork = (id) => {
        // Logic to edit work by id
        // This might involve setting the work to be edited into state and opening a modal or form for editing
        console.log('Edit Work', id);
    };

    const shareWork = (id) => {
       
        console.log('Share Work', id);
    };

    return (
        <div className="coordinator-component">
            <div className="profile-and-greeting-section">
                <img src={profilePhoto} alt="Coordinator" className="profile-photo" />
                <h1 className="greeting-text">Hi Omkar, Coordinator</h1>
            </div>
            <div>
          <button className="edit-button-cordi" onClick={toggleModal}>Add Database</button>
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
        <div>
         
             
            
             
          
        </div>

            <div className="previous-works-section">
                {previousWorks.map((work) => (
                    <div key={work.id} className="work-item">
                        <h2>{work.title}</h2>
                        <p>{work.description}</p>
                        <button className="edit-button-cordi" onClick={() => editWork(work.id)}>Edit</button>
                        <button className="edit-button-cordi" onClick={() => deleteWork(work.id)}>Delete</button>
                        <button className="edit-button-cordi" onClick={() => shareWork(work.id)}>Share</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoordinatorComponent;
