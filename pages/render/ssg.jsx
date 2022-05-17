import React from "react";
import { MockApi } from "../../constants/api";

export async function getStaticProps() {
  const data = await MockApi({
    time: new Date().toLocaleTimeString(),
  });
  return {
    props: {
      ssgTime: data,
    },
  };
}

function ssg({ ssgTime }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="text-3xl font-bold flex flex-col justify-center items-center
        w-[300px] h-[300px] bg-gray-600 rounded-lg
        "
      >
        <h1>SSG TIME</h1>
        <div>{ssgTime.time}</div>
      </div>
    </div>
  );
}

export default ssg;
