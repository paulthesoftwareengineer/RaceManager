import React, { useState } from 'react';

const RaceSchedule = () => {
  const [races, setRaces] = useState([]);
  const [raceName, setRaceName] = useState('');
  const [raceDate, setRaceDate] = useState('');

  const addRace = () => {
    if (raceName !== '' && raceDate !== '') {
      const race = {
        name: raceName,
        date: raceDate,
      };

      setRaces([...races, race]);
      setRaceName('');
      setRaceDate('');
    }
  };

  return (
    <div>
      <h2>Race Schedule</h2>
      <label>
        Race Name:
        <input
          type="text"
          value={raceName}
          onChange={(e) => setRaceName(e.target.value)}
        />
     
