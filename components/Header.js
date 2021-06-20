import React from "react";
import Image from "next/Image";
import {
  BellIcon,
  HomeIcon,
  ChatIcon,
  ChevronDownIcon,
  UserGroupsIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "../components/HeaderIcon";

function Header() {
  return (
    <div>
      <div className="flex items-center">
        <Image
          className="bg-black"
          width={40}
          height={40}
          src="/../img/logo.png"
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={'homeIcon'} />
          <HeaderIcon Icon={'flagIcon'} />
          <HeaderIcon Icon={'playIcon'} />
          <HeaderIcon Icon={'shoppingCartIcon'} />
          <HeaderIcon Icon={'userGroupsIcon'} />
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Header;
