import React from "react";
import JobCardList from "../components/JobCardList";

const Jobs = () => {
  const jobData = [
    {
      title: "Police Constable BPS-07",
      detail:
        "Police constable job in Karachi Range Last Date to Apply is 26/04/2024",
      link: "/MissingPerson",
    },
    {
      title: "Police Assistant Sub Inspector BPS-11",
      detail:
        "Police Assistant Sub Inspector job in Karachi Range Last Date to Apply is 26/04/2024",

      link: "/MissingPerson",
    },
    {
      title: "Police Sub Inspector BPS-14",
      detail:
        "Police Sub Inspector job in Karachi Range Last Date to Apply is 26/04/2024",

      link: "/MissingPerson",
    },
    {
      title: "Police Inspector BPS-16",
      detail:
        "Police Inspector job in Karachi Range Last Date to Apply is 26/04/2024",

      link: "/MissingPerson",
    },
  ];
  return (
    <div className="h-full">
      <JobCardList data={jobData} />
    </div>
  );
};

export default Jobs;
