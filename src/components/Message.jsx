import React from "react";

const Message = () => {
  return (
    <div className="flex justify-evenly flex-wrap w-full p-4 container mx-auto">
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-3xl mb-5 font-bold">
          Vision of Karachi Police Cheif
        </h1>
        <p className="max-w-xl text-justify">
          As Karachi Police Chief, my vision is a safer, more secure city where
          trust between the community and the police is paramount. We'll achieve
          this through professionalism, integrity, and proactive crime
          prevention, prioritizing victim support and officer training.
          Diversity, accountability, and transparency will be our guiding
          principles, ensuring a Karachi where everyone feels safe and valued.
        </p>
      </div>

      <img
        className="rounded-lg my-5"
        src="./head.jpg"
        width={"250px"}
        alt=""
      />
    </div>
  );
};

export default Message;
