import React from "react";

const Message = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 my-10 text-white">
      {/* Uncomment this block if you need to add a vision statement */}
      {/* <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-5 font-bold text-center">
          Vision of Karachi Police Chief
        </h1>
        <p className="max-w-xl text-justify">
          As Karachi Police Chief, my vision is a safer, more secure city where
          trust between the community and the police is paramount. We'll achieve
          this through professionalism, integrity, and proactive crime
          prevention, prioritizing victim support and officer training.
          Diversity, accountability, and transparency will be our guiding
          principles, ensuring a Karachi where everyone feels safe and valued.
        </p>
      </div> */}

      <div className="flex justify-center">
        <img
          className="rounded-lg my-5 object-contain max-w-full"
          src="./app.png"
          alt="Karachi Police App"
        />
      </div>
    </div>
  );
};

export default Message;
