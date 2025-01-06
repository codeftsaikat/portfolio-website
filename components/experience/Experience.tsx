import React from "react";
import { Button, MovingBorder } from "../ui/MovingBorder";
import { workExperience } from "@/data/data";

const Experience = () => {
  return (
    <div className="py-20" id="clients">
      <h2 className="heading">
        My Work {""}
        <span className="text-purple">Experience</span>
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:flex-row p-3 py-6 lg:items-center md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h2 className="text-xl md:text-2xl font-bold text-start">
                  {card.title}
                </h2>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
