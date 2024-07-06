import React, { useState, useEffect } from "react";
import AmortizationForm from "./components/AmortizationForm";
import AmortizationScheduleList from "./components/AmortizationScheduleList";
import AmortizationDetails from "./components/AmortizationDetails";
import { getAmortizationSchedules } from "./service/ApiService";
import "./index.css";

const App = () => {
  const [schedules, setSchedules] = useState([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      const data = await getAmortizationSchedules();
      setSchedules(data);
    };

    fetchSchedules();
  }, []);

  const handleScheduleCreated = (newSchedule) => {
    setSchedules([...schedules, newSchedule]);
  };

  const handleSelectSchedule = (id) => {
    setSelectedScheduleId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
      <img src="Jess Labs.png" alt="Logo" className="w-20 h-auto mr-2" /> 
        Amortization Schedule
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AmortizationForm onScheduleCreated={handleScheduleCreated} />
        <AmortizationScheduleList
          schedules={schedules}
          onSelectSchedule={handleSelectSchedule}
        />
      </div>
      {selectedScheduleId && (
        <AmortizationDetails scheduleId={selectedScheduleId} />
      )}
    </div>
  );
};

export default App;
