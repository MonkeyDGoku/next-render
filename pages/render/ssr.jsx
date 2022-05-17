import React from "react";
import { MockApi } from "../../constants/api";

export async function getServerSideProps() {
  const data = await MockApi({
    time: new Date().toLocaleTimeString(),
  });
  return {
    props: {
      ssrTime: data,
    },
  };
}

function ssr({ ssrTime }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="text-3xl font-bold flex flex-col justify-center items-center
        w-[300px] h-[300px] bg-gray-600 rounded-lg
        "
      >
        <h1>SSR TIME</h1>
        <div>{ssrTime.time}</div>
      </div>
    </div>
  );
}

export default ssr;
