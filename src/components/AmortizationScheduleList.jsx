import React from "react";

const AmortizationScheduleList = ({ schedules, onSelectSchedule }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Amortization Schedules</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Cost</th>
            <th className="py-2 px-4 border-b text-left">Deposit</th>
            <th className="py-2 px-4 border-b text-left">Interest</th>
            <th className="py-2 px-4 border-b text-left">No. of Payments</th>
            <th className="py-2 px-4 border-b text-left">Balloon</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr
              key={schedule.id}
              className="hover:bg-gray-100 cursor-pointer text-left"
              onClick={() => onSelectSchedule(schedule.id)}
            >
              <td className="py-2 px-4 border-b text-left">{schedule.id}</td>
              <td className="py-2 px-4 border-b text-left">
                {schedule.loanDetails.cost}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {schedule.loanDetails.deposit}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {schedule.loanDetails.interest}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {schedule.loanDetails.noOfPayments}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {schedule.loanDetails.balloon}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmortizationScheduleList;
