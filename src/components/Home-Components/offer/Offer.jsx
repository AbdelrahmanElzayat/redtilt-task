import React from "react";
import ListCardOffer from "./ListCardOffer";

const Offer = () => {
  return (
    <section className="pt-20 text-center">
      <div className="container">
        <div className="offerContainer">
          <div className="headOffer flex flex-col items-center justify-center gap-5 mb-5">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold">
              What We Offer ?
            </h3>
            <div className="py-3 px-4 md:px-5 border-[1px] rounded-full border-red">
              <span className="dark:text-slate-300 text-xs md:text-lg lg:text-xl">
                Our Experts will help you in following Fields
              </span>
            </div>
          </div>
          <ListCardOffer />
        </div>
      </div>
    </section>
  );
};

export default Offer;
