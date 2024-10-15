import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({ image, name }) => {
  const router = useRouter();
  return (
    <div
      className="w-44 mx-auto cursor-pointer group"
      onClick={() => router.push("/movies")}
    >
      <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <img src={image} alt="user" className="w-max h-max object-contain" />
      </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default ProfileCard;
