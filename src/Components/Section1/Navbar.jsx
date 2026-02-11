import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 pt-6">
      <h1 className="bg-black text-white rounded-full px-6 py-2 uppercase">
        Target Audience
      </h1>
      <button className="bg-gray-200 tracking-widest focus-visible:not-first:not-indeterminate:not-only-of-type:   rounded-full border-none px-6 py-2 text-sm uppercase">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
