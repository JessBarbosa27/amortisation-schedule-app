import React, { useEffect, useState } from "react";
import { getAmortizationsByScheduleId } from "../service/ApiService";

const AmortizationDetails = ({ scheduleId }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getAmortizationsByScheduleId(scheduleId);
        setDetails(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, [scheduleId]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-bold mb-4">
        Amortization Details for Schedule {scheduleId}
      </h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Period</th>
            <th className="py-2 px-4 border-b text-left">Payment</th>
            <th className="py-2 px-4 border-b text-left">Principal</th>
            <th className="py-2 px-4 border-b text-left">Interest</th>
            <th className="py-2 px-4 border-b text-left">Balance</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-left">{detail.period}</td>
              <td className="py-2 px-4 border-b text-left">{detail.payment}</td>
              <td className="py-2 px-4 border-b text-left">
                {detail.principal}
              </td>
              <td className="py-2 px-4 border-b text-left">
                {detail.interest}
              </td>
              <td className="py-2 px-4 border-b text-left">{detail.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmortizationDetails;
