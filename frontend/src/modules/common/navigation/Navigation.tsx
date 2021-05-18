import React from "react";
import "./Navigation.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

function Navigation() {
  return (
    <List>
      <ListItem className="leftmenu" button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <a href="/">
          <ListItemText primary={"Wyszukiwarka"} />
        </a>
      </ListItem>
      <ListItem className="leftmenu" button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <a href="https://github.com/radiator0/wiki-search-engine">
          <ListItemText primary={"Kontakt"} />
        </a>
      </ListItem>
    </List>
  );
}

export default Navigation;
