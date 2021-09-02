import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SaveIcon from "@material-ui/icons/Save";
import React, { ReactElement, useContext, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  UPDATE_DRAWER_STATE,
  UPDATE_EDUCATION_ORDER,
} from "../../constants/actionTypes";
import UpdateData from "../../helpers/UpdateData";
import "../../styles/reorders.css";
import Education from "../cards/Education";
import { GlobalContext } from "./../../context/reducers/provider";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // height: "30px",
    width: "90%",
    marginBottom: "30px",
  },
  button: {
    margin: theme.spacing(1),
    marginRight: 20,
  },
  heading: {
    padding: 10,
    marginBottom: 20,
  },
}));

const edu = [
  {
    id: "1",
    institution: "greenfields public school",
    major: "science",
    startDate: "may 2019",
    endDate: "may 2020",
  },
  {
    id: "2",
    institution: "Inderprastha public school ",
    major: "science",
    startDate: "may 2019",
    endDate: "may 2020",
  },
  {
    id: "3",
    institution: "Einstien public school",
    major: "science",
    startDate: "may 2019",
    endDate: "may 2020",
  },
  {
    id: "4",
    institution: "Newton public school",
    major: "science",
    startDate: "may 2019",
    endDate: "may 2020",
  },
];

const ReorderEducation = ({}: Props): ReactElement => {
  const classes = useStyles();
  const state = useContext(GlobalContext);

  const [eds, setEds] = useState(state["educationState"]?.allEdu);

  console.log("Education State: ", state["educationState"].allEdu);

  const handleOnDragEnd = (result) => {
    console.log(result);

    if (!result.destination) return;

    const items = Array.from(eds);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEds(items);
  };

  return (
    // <OpenDrawer>
    // <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="reorderEdu">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          className={classes.button}
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() =>
            UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
              currentDrawer: "",
            })
          }
        >
          <span style={{ fontSize: "0.8rem", marginRight: "12px" }}>Back</span>
        </Button>

        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={() =>
            UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
              currentDrawer: "edu",
            })
          }
        >
          Add Education
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={() => {
            UpdateData(
              state["educationStateDispatch"],
              UPDATE_EDUCATION_ORDER,
              eds
            );
          }}
        >
          Save Order
        </Button>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="reorder_list">
          {(provided) => (
            <div
              className="reorder_list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {eds.map(
                ({ id, institution, major, startDate, endDate }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          className="reorder_card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Education
                            id={id}
                            institution={institution}
                            major={major}
                            startDate={startDate}
                            endDate={endDate}
                          />

                          {/* <span>
                              {institution}- {major}
                            </span> */}
                        </div>
                      )}
                    </Draggable>
                  );
                }
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    // </div>
  );
};

{
  /* </OpenDrawer> */
}
export default ReorderEducation;
