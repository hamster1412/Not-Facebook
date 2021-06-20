import React from "react";

function HeaderIcon({ icon }) {
  return (
    <div className="cursor-pointer md:px-10 sm:h-14 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <icon className="h-5 text-center sm:h-7 mx-auto group-hover:text-blue-500 flex-shrink" />
    </div>
  );
}

export default HeaderIcon;
