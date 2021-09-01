import { Container, Grid } from "@material-ui/core";
import React from "react";
import SupportIcon from "../../assets/interview.svg";
import SimpleAccordion from "./Accordion";

const faqs = [
  {
    ques: "Is Buildr really free?",
    ans: "Yes, it's completely free for everyone.",
  },
  {
    ques: "How many resumes can we create?",
    ans: "There is no limit on number of resumes. You can create any number of resumes one at a time.",
  },
  {
    ques: "What will be the format of downloaded resume?",
    ans: "Resume will be downloaded in pdf format",
  },
  {
    ques: "What is the size of the PDF?",
    ans: "The size of the PDF is A4 which is the standard size for all Resume. It is usually less than 100kb.",
  },
];

function Faq() {
  return (
    <Container style={{ marginTop: "10rem" }}>
      <Grid container spacing={3}>
        <Grid
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={SupportIcon} style={{ height: 400, width: 400 }} />
        </Grid>
        <Grid xs={6}>
          <h4 className="faq_sub">FAQs</h4>
          <h1 className="faq_head">
            Do you have
            <span className="faq_head_inner"> Questions?</span>
          </h1>

          <span className="faq_para">
            Here are some frequently asked questions. If you have any other
            questions, feel free to reach out via the contact form below.
          </span>

          <div>
            {faqs.map((faq, i) => (
              <div style={{ margin: "20px 0 " }}>
                <SimpleAccordion faq={faq} key={i} />
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Faq;
