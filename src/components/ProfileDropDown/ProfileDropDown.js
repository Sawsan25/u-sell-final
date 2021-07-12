/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import "./ProfileDropDown.scss"

const useStyles = makeStyles(styles);

export default function ProfileDropDown(props) {
  const classes = useStyles();

  
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
         withAvatar={true} 
          noLiPadding
          buttonText={
            <div className={"profileNameContainer"}>
              <div className={"profileName"} class="profileNavDroptype">Selim Turquix </div>
              <div className={"profileName"} class="profileNavDroptype">Consultant</div>
            </div>
          }
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon= "avatar"
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem>



    </List>
  );
}
