import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
    width: "55%",
    minHeight: 50,
    marginBottom: 40,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

interface Props {
  skillArray: string[];
  setSkillArray: React.Dispatch<React.SetStateAction<string[]>>;
}

const ChipsArray = (props: Props) => {
  const { skillArray, setSkillArray } = props;
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setSkillArray((chips) =>
      skillArray.filter(
        (chip) => skillArray.indexOf(chip) !== skillArray.indexOf(chipToDelete)
      )
    );
  };

  return (
    <Paper component="ul" className={classes.root} style={{ marginLeft: 10 }}>
      {skillArray.map((data, k) => {
        return (
          <li key={k}>
            <Chip
              label={data}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
};

export default ChipsArray;
