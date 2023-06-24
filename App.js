import React from 'react';
import TeamManagement from './components/TeamManagement';
import FinanceSection from './components/FinanceSection';
import RaceSchedule from './components/RaceSchedule';

const App = () => {
  return (
    <div>
      <h1>Race Manager</h1>
      <TeamManagement />
      <FinanceSection />
      <RaceSchedule />
    </div>
  );
};

export default App;
