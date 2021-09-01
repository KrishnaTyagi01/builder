import React from "react";
import { Button, Container, Grid, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
function Github() {
  return (
    <Container className="github">
      <Grid container spacing={3}>
        <Grid
          xs={8}
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

        <Grid xs={4}>
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
                // borderRadius: 30,
                // padding: 20,
                marginTop: 40,
                width: "18rem",
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
