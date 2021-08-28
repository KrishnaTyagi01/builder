import React, { ReactElement, useState } from "react";
import Education from "../cards/Education";
import Experience from "../cards/Experience";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/reorders.css";
import OpenDrawer from "./../drawer/OpenDrawer";
import UpdateData from "../../helpers/UpdateData";
import { useContext } from "react";
import { GlobalContext } from "./../../context/reducers/provider";
import {
  UPDATE_DRAWER_STATE,
  UPDATE_EDUCATION_ORDER,
  UPDATE_EXPERIENCE_ORDER,
} from "../../constants/actionTypes";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { UPDATE_EDUCATION_STATE } from "./../../constants/actionTypes/index";

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
    <OpenDrawer>
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
            <span style={{ fontSize: "0.8rem", marginRight: "12px" }}>
              Back
            </span>
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
                    {
                      id,
                      designation,
                      company,
                      description,
                      startDate,
                      endDate,
                    },
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
    </OpenDrawer>
  );
};

export default ReorderExperience;
