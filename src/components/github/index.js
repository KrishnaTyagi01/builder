import React from "react";
import { Button, Container, Grid, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
function Github() {
  return (
    <Container className="github">
      <Grid container spacing={3}>
        <Grid
          lg={8}
          md={8}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1 className="github_head">Checkout the Github Repository</h1>
            <h4 className="github_sub">
              The project is Open Source. Feel free to have a look around the
              repository.
            </h4>
          </div>
        </Grid>

        <Grid xs={4} lg={4} md={4} sm={12} xs={12}>
          <Link
            href="https://github.com/KrishnaTyagi01/builder"
            target="_blank"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<GitHubIcon />}
              className="github_button"
              style={{
                marginTop: 40,
                width: "80%",
                marginLeft: 15,
              }}
            >
              Github
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Github;
