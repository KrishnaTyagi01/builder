import { Container, Grid, Hidden, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import EmailImage from "../../assets/email-illustration.svg";
function Contact() {
  return (
    <Container style={{ marginTop: 120 }}>
      <Grid container spacing={3}>
        <Grid lg={6} md={6} sm={12} xs={12}>
          <div>
            <h5 className="contact_sub">Contact Me</h5>
            <h1 className="contact_head">
              Feel free to
              <span className="contact_head_inner"> get in touch</span>
              <br />
              <span> with me.</span>
            </h1>
            <p className="contact_para">
              Hey, My name is krishna. I am a full stack developer and I love to
              create applications for web.
              <br />
              <br />
              If you have any questions or just want to connect with me
              personally, My social links are given below. Feel free to drop a
              message
            </p>
            <span className="contact_info">Email:</span>{" "}
            <span className="contact_info_email">tyagikrishna38@gmail.com</span>
            <div>
              {/* <span className="contact_info_socials">Socials</span> */}
              <div style={{ marginTop: 40 }}>
                <Link href="https://twitter.com/krishnatyagi01" target="_blank">
                  <TwitterIcon id="contact_icons" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/krishnatyagi01/"
                  target="_blank"
                >
                  <LinkedInIcon id="contact_icons" />
                </Link>
                <Link href="https://github.com/KrishnaTyagi01" target="_blank">
                  <GitHubIcon
                    style={{ height: 70, width: 70, marginBottom: 5 }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid lg={6} md={6}>
            <img
              src={EmailImage}
              alt="Email Illustration"
              style={{ height: 600, width: 600 }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}

export default Contact;
