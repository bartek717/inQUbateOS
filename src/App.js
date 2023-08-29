import React, { useState, useEffect } from 'react';
import { app } from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Deadlines from './components/Deadlines';
import DaysUntil from './components/DaysUntil'; // Import the DaysUntil component
import Date from './components/Date';
import Calender from './components/CustomCalendar';
import Folders from './components/Folders';
import './styles.css'; // Import your CSS file
import CustomCalendar from './components/CustomCalendar';
import logo from './images/logo.png';

function App() {
  const [deadlines, setDeadlines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const deadlinesCollection = collection(db, 'deadlines');
      const querySnapshot = await getDocs(deadlinesCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().Date.toMillis(),
      }));

      setDeadlines(data);
      console.log('data', data);
    };
    console.log('fetching data');
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="top-row">
        <div className='deadlines'>
          <Deadlines deadlines={deadlines} />
        </div>
        <div className='folders'>
          <Folders />
        </div>
      </div>
      <DaysUntil deadlines={deadlines} className="centered-text" />
      
      <div className="bottom-row">
        <div className='calendar'>
          <CustomCalendar />
        </div>
        <div className='logo2'>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        
      </div>
    </div>

  );
}

export default App;

