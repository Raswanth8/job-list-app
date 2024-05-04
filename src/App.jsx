import React, { useEffect, useState, useRef } from "react";
import { CircularProgress, Grid, Box } from "@mui/material";
import fetchjobDetails from "./data/fetchData.js";
import Card from "./components/Card.jsx";
import _ from "lodash";

const App = () => {
  const [jobData, setJobData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  // Using the IntersectionObserver API to observe the loader element. This is used to implement infinite scrolling.
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  // Fetching job details and updating the state
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      const data = await fetchjobDetails(page);
      const newData = data.jdList;
      setJobData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    };
    // Debouncing the data load function to prevent multiple API requests
    const debounceDataCall = _.debounce(loadData, 500);
    debounceDataCall();
  }, [page]);

  const handleObserver = (values) => {
    const target = values[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Grid container spacing={2}>
      {jobData.map((details, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card jobDetails={details} />
        </Grid>
      ))}
      {loading && (
        <Box display="flex" justifyContent="center">
          <div className="loading" ref={loader}>
            <CircularProgress color="success" />
          </div>
        </Box>
      )}
    </Grid>
  );
};

export default App;
