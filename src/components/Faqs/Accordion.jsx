import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: "#000",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ faq }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion
        // style={{ backgroundColor: "rgba(176,176,176, .1)" }}
        id="accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="accordion_head" style={{ fontSize: "1.2rem" }}>
            {faq?.ques}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="accordion_ans">{faq?.ans}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
