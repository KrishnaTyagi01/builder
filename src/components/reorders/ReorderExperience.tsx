import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SaveIcon from "@material-ui/icons/Save";
import React, { ReactElement, useContext, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  UPDATE_DRAWER_STATE,
  UPDATE_EXPERIENCE_ORDER,
} from "../../constants/actionTypes";
import UpdateData from "../../helpers/UpdateData";
import "../../styles/reorders.css";
import Experience from "../cards/Experience";
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

const ReorderExperience = ({}: Props): ReactElement => {
  const classes = useStyles();
  const state = useContext(GlobalContext);

  const [eds, setEds] = useState(state["experienceState"]?.allExp);

  console.log("Exp State: ", state["experienceState"]?.allExp);

  const handleOnDragEnd = (result) => {
    console.log(result);

    if (!result.destination) return;

    const items = Array.from(eds);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEds(items);
  };

  return (
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
              currentDrawer: "exp",
            })
          }
        >
          Add Experience
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={() => {
            UpdateData(
              state["experienceStateDispatch"],
              UPDATE_EXPERIENCE_ORDER,
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
              {eds?.map(
                (
                  { id, designation, company, description, startDate, endDate },
                  index
                ) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          className="reorder_card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Experience
                            id={id}
                            designation={designation}
                            company={company}
                            description={description}
                            startDate={startDate}
                            endDate={endDate}
                          />
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
  );
};

export default ReorderExperience;
