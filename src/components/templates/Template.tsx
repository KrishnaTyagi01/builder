import React, { ReactElement } from "react";
import "../../styles/temp.css";
import Grid from "@material-ui/core/Grid";

const Template = () => {
  return (
    <div className="temp">
      {/* <div className="temp_left"> */}
      <Grid item xs={9}>
        <div className="temp_top">
          <h2 className="temp_name">Krishna Tyagi</h2>
          <h4 className="temp_designation" style={{ marginTop: -15 }}>
            Front End Developer
          </h4>
        </div>

        <div className="temp_summary">
          <h4 className="temp_head">Professional Summary</h4>
          <hr className="hr_dashed" />
          <p className="temp_summary_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id
            itaque quam, suscipit atque consectetur vitae adipisci error? Porro
            minus vitae nesciunt dignissimos quia ipsa corporis molestias sequi
            doloribus pariatur
          </p>
        </div>

        <div className="temp_exp">
          <h4 className="temp_head">Employment History</h4>
          <hr className="hr_dashed" />

          <div className="temp_exp_inner">
            <Grid item xs={8}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="temp_exp_designation">FrontEnd Developer</span>
                <span className="temp_exp_company">Microsoft</span>
                <span className="temp_exp_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus id itaque quam, suscipit atque consectetur vitae
                  adipisci error? Porro minus vitae nesciunt dignissimos quia
                  ipsa corporis molestias sequi doloribus pariatur fugit
                  adipisci assumenda, reiciendis incidunt molestiae? Quo ab
                  porro enim.
                </span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <span className="temp_exp_year">July 2020 - june 2021</span>
            </Grid>
          </div>
        </div>

        <div className="temp_edu">
          <h4 className="temp_head">Education</h4>
          <hr className="hr_dashed" />

          <div className="temp_edu_inner">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="temp_edu_institution">
                GreenFields Public School
              </span>
              <span className="temp_edu_major">Major: Science</span>
            </div>
            <span className="temp_edu_year">July 2020 - june 2021</span>
          </div>
        </div>
      </Grid>
      {/* </div> */}

      {/* <div className="temp_right"> */}
      <Grid item xs={3} style={{ marginLeft: 100, marginTop: 40 }}>
        <div className="temp_personal" style={{ marginBottom: 70 }}>
          <span className="temp_personal_detail">tyagikrishna38@gmail.com</span>
          <span className="temp_personal_detail">7428622956</span>
          <span className="temp_personal_detail">India</span>
        </div>

        <div className="temp_extra">
          <h4 className="temp_extra_title">FrontEnd Dev</h4>
          <p className="temp_extra_elements">
            <span className="temp_extra_element">• React </span>
            <span className="temp_extra_element">• React</span>
            <span className="temp_extra_element">• React</span>
            <span className="temp_extra_element">• React </span>
            <span className="temp_extra_element">• React</span>
            <span className="temp_extra_element">• React</span>
            <span className="temp_extra_element">• React </span>
            <span className="temp_extra_element">• React</span>
            <span className="temp_extra_element">• React</span>
          </p>
        </div>

        <div className="temp_extra">
          <h4 className="temp_extra_title">FrontEnd Dev</h4>
          <p className="temp_extra_elements">
            <span className="temp_extra_element">• React </span>
            <span className="temp_extra_element">• React</span>
            <span className="temp_extra_element">• React</span>
          </p>
        </div>
      </Grid>
      {/* </div> */}
    </div>
  );
};

export default Template;
