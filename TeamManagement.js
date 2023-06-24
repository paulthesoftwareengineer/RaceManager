import React, { useState } from 'react';

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');

  const addMember = () => {
    if (selectedMember !== '') {
      setTeamMembers([...teamMembers, selectedMember]);
      setSelectedMember('');
    }
  };

  const removeMember = (member) => {
    const updatedMembers = teamMembers.filter((m) => m !== member);
    setTeamMembers(updatedMembers);
  };

  return (
    <div>
      <h2>Team Management</h2>
      <label>
        Add Team Member:
        <input
          type="text"
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
        />
        <button onClick={addMember}>Add</button>
      </label>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member}
            <button onClick={() => removeMember(member)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamManagement;
