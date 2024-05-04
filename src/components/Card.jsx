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

  const formatRole = (string) => {
    return string !== "ios"
      ? string.charAt(0).toUpperCase() + string.slice(1)
      : string.toUpperCase();
  };

  const getEstimatedSalary = () => {
    return `${jobDetails.minJdSalary} - ${jobDetails.maxJdSalary} ${jobDetails.salaryCurrencyCode}`;
  };

  const getExperience = (constants) => {
    return `${jobDetails.minExp} - ${jobDetails.maxExp} ${constants.kYears}`;
  };

  return (
    <Card
      sx={{
        maxWidth: "80%",
        margin: "1%",
        borderRadius: "15px",
        boxShadow: "1px 1px 6px rgba(0,0,0,0.3)",
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="company logo" />}
        title={jobDetails.companyName}
        subheader={formatRole(jobDetails.jobRole)}
      />
      <span>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{ margin: "1%" }}
        >
          {jobDetails.location.toUpperCase()}
        </Typography>
      </span>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{ fontWeight: "bold" }}
        >
          {_constants.kEstimatedSalary}: {getEstimatedSalary()}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {_constants.kJobDescription}:{" "}
          <span
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {jobDetails.jobDetailsFromCompany.substring(0, 100)}...
          </span>
          <a href="#open" onClick={handleOpen}>
            {_constants.kShowMore}
          </a>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{ fontWeight: "bold" }}
        >
          {_constants.kMinimumExperience}: {getExperience(_constants)}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: "column" }}>
        <Button size="small" sx={{ background: "blue", marginBottom: "10px" }}>
          {_constants.kEasyApply}
        </Button>
        <Button size="small" sx={{ background: "red" }}>
          {_constants.kReferral}
        </Button>
      </CardActions>
      <Modal open={open} onClose={handleClose}>
        <Card>
          <CardContent>
            <Typography variant="h6">{_constants.kAbout}</Typography>
            <Typography variant="body2">
              {jobDetails.jobDetailsFromCompany}
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </Card>
  );
};

export default CardComponent;
