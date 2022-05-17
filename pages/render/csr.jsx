import React from "react";
import { MockApi } from "../../constants/api";
import { useState, useEffect } from "react";

function Csr() {
  const [csrTime, setCsrTime] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      const data = await MockApi({
        time: new Date().toLocaleTimeString(),
      });
      setCsrTime(data);
    };
    callApi();
  }, []);
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div
          className="text-3xl font-bold flex flex-col justify-center items-center
      w-[300px] h-[300px] bg-gray-600 rounded-lg
      "
        >
          <h1>CSR TIME</h1>
          <div>{csrTime.time}</div>
        </div>
      </div>
    </div>
  );
}

export default Csr;
