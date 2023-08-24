import React from "react";

function CarsFilterOption() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Prospectus</h2>
        <h2>Explore our Cars, You might Like it !!</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            Cost Range
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-accent w-full md:block max-w-xs hidden">
          <option disabled selected>
            Crafted Brands
          </option>
          <option>BMW</option>
          <option>Audi</option>
          <option>Mercedes</option>
          <option>Honda Civic</option>
          <option>Moris Garage</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOption;
