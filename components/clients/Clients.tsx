import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data/data";

const Clients = () => {
  return (
    <div className="py-20" id="clients">
      <h2 className="heading">
        Kind words from {""}
        <span className="text-purple">Satisfied Clients</span>
      </h2>

      <div className="flex flex-wrap items-center antialiased">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div className="flex gap-2 md:max-w-60 max-w-32" key={id}>
            <img src={img} alt={name} />
            <img src={nameImg} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
