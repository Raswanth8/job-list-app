import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as _constants from "../util/constants.js";

const CardComponent = ({ jobDetails }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="company logo" />}
        title={jobDetails.companyName}
        subheader={`${jobDetails.jobTitle} - ${jobDetails.location}`}
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {_constants.kEstimatedSalary}: {jobDetails.estimatedSalary}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {_constants.kJobDescription}:{" "}
          <a href="#" onClick={handleOpen}>
            {_constants.kShowMore}
          </a>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {_constants.kMinimumExperience}: {jobDetails.minimumExperience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{_constants.kEasyApply}</Button>
        <Button size="small">{_constants.kReferral}</Button>
      </CardActions>
      <Modal open={open} onClose={handleClose}>
        <div>
          <h2>{_constants.kAbout}</h2>
          <p>{jobDetails.jobDetailsFromCompany}</p>
        </div>
      </Modal>
    </Card>
  );
};

export default CardComponent;
