import React from "react";
import JobCard from "./JobCard";

const JobCardList = ({ data }) => {
  return (
    <div className="w-full my-8">
      <h1 className="text-center text-3xl font-medium">Recent Jobs</h1>
      <div className="flex gap-10 flex-wrap mx-auto justify-center my-5">
        {data.map((item) => (
          <JobCard text={item.title} detail={item.detail}/>
        ))}
      </div>
    </div>
  );
};

export default JobCardList;
