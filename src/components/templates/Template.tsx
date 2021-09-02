import Grid from "@material-ui/core/Grid";
import React from "react";
import "../../styles/temp.css";
import EduTemp from "./EduTemp";
import ExpTemp from "./ExpTemp";
import ExtraTemp from "./ExtraTemp";

class Template extends React.Component<any, any> {
  render() {
    return (
      <div className="temp">
        <Grid item xs={9}>
          <div className="temp_top" style={{ paddingLeft: 20 }}>
            <h2 className="temp_name">{this.props.personalState?.name}</h2>
            <h4 className="temp_designation" style={{ marginTop: -15 }}>
              {this.props.personalState?.designation}
            </h4>
          </div>

          <div className="temp_summary" style={{ paddingLeft: 20 }}>
            <h4 className="temp_head">Professional Summary</h4>
            <hr className="hr_dashed" />
            <div className="temp_summary_content">
              {this.props.personalState?.cobjective}
            </div>
          </div>

          <ExpTemp />

          <EduTemp />
        </Grid>

        <Grid item xs={3} style={{ marginLeft: 100, marginTop: 40 }}>
          <div
            className="temp_personal"
            style={{ marginBottom: 70, paddingRight: 30 }}
          >
            <span className="temp_personal_detail">
              {this.props.personalState?.email}
            </span>
            <span className="temp_personal_detail">
              {this.props.personalState?.phoneNumber}
            </span>
            <span className="temp_personal_detail">
              {this.props.personalState?.country}
            </span>
          </div>

          <ExtraTemp />
        </Grid>
      </div>
    );
  }
}
export default Template;
