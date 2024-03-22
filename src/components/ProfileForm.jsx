import React, { useState } from 'react';

const ProfileForm = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profilePhoto) {
      setError('Please select a photo to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('profile_photo', profilePhoto);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN', // Replace with your token
        },
        body: formData,
      });

      if (response.ok) {
        setSuccess('Profile photo uploaded successfully!');
      } else {
        setError('Failed to upload profile photo. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update Profile Photo</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="profile_photo"
          onChange={(e) => setProfilePhoto(e.target.files[0])}
        />
        <button type="submit">Upload Photo</button>
      </form>
    </div>
  );
};

export default ProfileForm;
