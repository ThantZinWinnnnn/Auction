import {
  Typography,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryCategories } from "../data/DummyData";

const SidebarLists = () => {
  const [check, setCheck] = useState(false);
  const checkHandler = () => {
    setCheck(!check);
  };
  return (
    <>
      <Typography>Filter by</Typography>
      {PrimaryCategories.map((name) => (
        <List>
          <ListItem>
            <ListSubheader>{name.header}</ListSubheader>
            <List>
              <Link to={name.c1}>
                <ListItem>
                  <ListItemText primary={name.c1} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="start"
                      checked={check}
                      onChange={checkHandler}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
              <Link to={name.c2}>
                <ListItem>
                  <ListItemText primary={name.c2} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="start"
                      checked={check}
                      onChange={checkHandler}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
              <Link to={name.c3}>
                <ListItem>
                  <ListItemText primary={name.c3} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="start"
                      checked={check}
                      onChange={checkHandler}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
              <Link to={name.c4}>
                <ListItem>
                  <ListItemText primary={name.c4} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="start"
                      checked={check}
                      onChange={checkHandler}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
              <Link to={name.c5}>
                <ListItem>
                  <ListItemText primary={name.c5} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      edge="start"
                      checked={check}
                      onChange={checkHandler}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
            </List>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default SidebarLists;
