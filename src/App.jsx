import React, { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import fetchjobDetails from "./data/fetchData.js";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [jobDetails, setJobDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchjobDetails();
      console.log(data.length);
      setJobDetails(data);
    };

    fetchData();
  }, []);

  if (!jobDetails) {
    return <CircularProgress color="success" />;
  }

  return (
    <div>
      {jobDetails.jdList.map((details, index) => (
        <Card key={index} jobDetails={details} />
      ))}
    </div>
  );
};

export default App;
