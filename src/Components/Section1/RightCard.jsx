import React from "react";
import { ArrowUpRight } from "lucide-react";
const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-60 overflow-hidden relative rounded-4xl">
      <img
        src={props.img}
        className="w-full h-full object-cover rounded-2xl pb-0.5"
        alt="Right Card Image"
      />
      <div className="absolute top-0 left-0 h-full w-full p-4 justify-between flex flex-col">
        <h2 className="bg-white h-12 w-12 justify-center items-center flex rounded-full text-xl font-bold">
          {props.id}
        </h2>
        <div>
          <p className="text-l font-medium leading-normal text-white pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            adipisci aspernatur architecto, optio nulla rem.
          </p>
          <div className="flex justify-between">
            <button
              style={{ backgroundColor: props.color }}
              className=" text-white font-semibold text-sm px-4 py-2 rounded-full"
            >
              {props.tag}
            </button>
            <button
              style={{ backgroundColor: props.color }}
              className=" text-white font-semibold text-sm px-4 py-2 rounded-full"
            >
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
