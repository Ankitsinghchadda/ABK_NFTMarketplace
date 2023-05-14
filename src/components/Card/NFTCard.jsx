import React from "react";

const NFTCard = ({img}) => {
  return (
    <div class="shadow hover:shadow-md w-[245px] shrink-0 bg-white rounded-[1rem] overflow-hidden cursor-pointer hover:-translate-y-2 transition-all ">
      <img
        class="object-cover w-full h-48"
        src={img}
        alt="Flower and sky"
      />

      <div class="relative p-4">
        <h3 class="text-base md:text-xl font-semibold text-gray-800 pb-4 text-ellipsis">
          This is card title
        </h3>
        <div className="flex justify-between">
            <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">Floor</span>
                <span className="font-semibold ">0.05 ETH</span>
            </div>
            <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-500 text-sm">Total Volume</span>
                <span className="font-semibold">41 ETH</span>
            </div>
        </div>
      </div>
    </div>

    
  );
};

export default NFTCard;
