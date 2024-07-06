// src/components/AmortizationForm.js

import React, { useState } from "react";
import { createAmortizationSchedule } from "../service/ApiService";

const AmortizationForm = ({ onScheduleCreated }) => {
  const [form, setForm] = useState({
    cost: "",
    deposit: "",
    interest: "",
    noOfPayments: "",
    balloon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSchedule = await createAmortizationSchedule(form);
      onScheduleCreated(newSchedule);
    } catch (error) {
      console.error("Error creating schedule:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Create Amortization Schedule</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Cost:</label>
        <input
          type="number"
          name="cost"
          value={form.cost}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Deposit:</label>
        <input
          type="number"
          name="deposit"
          value={form.deposit}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Interest:</label>
        <input
          type="number"
          name="interest"
          value={form.interest}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">No. of Payments:</label>
        <input
          type="number"
          name="noOfPayments"
          value={form.noOfPayments}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Balloon:</label>
        <input
          type="number"
          name="balloon"
          value={form.balloon}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded mt-4"
      >
        Create Schedule
      </button>
    </form>
  );
};

export default AmortizationForm;
