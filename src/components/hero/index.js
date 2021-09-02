import { Button, Container, Grid, Hidden } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import React from "react";
import { Link } from "react-router-dom";
import DesignIllustration from "../../assets/design-illustration-2.svg";
import "../../styles/landing.css";

const Hero = () => {
  return (
    <Container className="hero" style={{ width: "100%" }}>
      <Grid container>
        <Grid
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container className="hero_heading">
            <h1>
              Build your professional resume in just 2 steps with
              <span className="hero_highlight">Buildr.</span>
            </h1>

            <h4 className="hero_sub" style={{ letterSpacing: 1 }}>
              Create professional resume that follow the exact ‘resume rules’
              employers look for. Easy to use and done within minutes - try now
              for free!
            </h4>

            <Link to="/resume" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<BuildIcon />}
                className="hero_button"
                style={{ borderRadius: 30, padding: 20, marginTop: 40 }}
              >
                Start Building Now
              </Button>
            </Link>
          </Container>
        </Grid>
        <Hidden smDown>
          <Grid lg={6} md={6}>
            <img
              src={DesignIllustration}
              alt="Design Illustration"
              style={{ height: 700, width: 700 }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default Hero;
