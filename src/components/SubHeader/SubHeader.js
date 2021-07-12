import React from "react";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { FiMonitor } from "react-icons/fi"
import { HiOutlineDocument } from "react-icons/hi"
import { FaFolderOpen } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
import { GiSuitcase } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import  './SubHeader.scss';

const useStyles = makeStyles(styles);

const SubHeader = () => {
    const classes = useStyles();
    const history = useHistory();

    return (

        <div className="nav">

            <List className={classes.list}>

                <ListItem className={classes.listItem}>
                    <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={(e) => e.preventDefault()}
                        color="transparent"
                    >
                        <span className={"tabContainer"}>
                            <FiMonitor color={"#727E8C"} />
                            <div className={"tabs"}>
                                Accueil
                            </div>
                        </span>


                    </Button>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        buttonText={
                            <span className={"tabContainer"}>
                                < GiSuitcase
                                    style={{ marginRight: 10, marginBottom: 2 }}
                                    color="#475F7B" />
                                <div className={"tabs"}>

                                    Nouveau contrat
                                </div>
                            </span>
                        }
                        // dropdownHeader=""
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent",
                        }}
                        dropdownList={[
                            {nav : true , title :"Proximus"},
                            // {nav : true , title :"Lampiris", func : ()=>redirect(history , 'new-contract-lampiris')}, 
                            {nav : true , title :"Lampiris", pathName : 'new-contract-lampiris' , history : history}, 
                            {nav : true , title :"UCare"},
                            {nav : true , title :"Convention"}, 
                        ]}
                    />
                </ListItem>

                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        buttonText={
                            <span className={"tabContainer"}>
                                <CgNotes style={{ marginRight: 10, marginBottom: 2 }} color="#475F7B" />
                                <div className={"tabs"}>
                                    Mes contrats
                                </div>
                            </span>

                        }
                        // dropdownHeader="Dropdown Header"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent",
                        }}
                        dropdownList={[
                            {nav : true , title :"Proximus"},
                            {nav : true , title :"Lampiris"},
                            {nav : true , title :"UCare"},
                            {nav : true , title :"Convention"}, 
                        ]}
                    />
                </ListItem>

                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        buttonText={
                            <span className={"tabContainer"}>
                                <FaFolderOpen style={{ marginRight: 10, marginBottom: 2 }} color="#475F7B" />
                                <div className={"tabs"}>
                                    Outils
                                </div>
                            </span>
                        }
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent",
                        }}
                        dropdownList={[
                            "Action",
                            "Another action",
                            "Something else here",
                            { divider: true },
                            "Separated link",
                            { divider: true },
                            "One more separated link",
                        ]}
                    />
                </ListItem>

                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        buttonText={
                            <span className={"tabContainer"}>
                                < HiOutlineDocument style={{ marginRight: 10, marginBottom: 2 }} color="#475F7B" />
                                <div className={"tabs"}>
                                    Documents Proximus
                                </div>
                            </span>
                        }
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent",
                        }}
                        dropdownList={[
                            "Action",
                            "Another action",
                            "Something else here",
                            { divider: true },
                            "Separated link",
                            { divider: true },
                            "One more separated link",
                        ]}
                    />
                </ListItem>


                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        buttonText={
                            <span className={"tabContainer"}>
                                < HiOutlineDocument style={
                                { marginRight: 10 ,marginBottom:2}
                            }
                                color="#475F7B" />
                                <div className={"tabs"}>
                                    Documents Lampiris
                                </div>
                            </span>
                        }
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent",
                        }}
                        dropdownList={[
                            "Action",
                            "Another action",
                            "Something else here",
                            { divider: true },
                            "Separated link",
                            { divider: true },
                            "One more separated link",
                        ]}
                    />
                </ListItem>

            </List>
        </div>

    )
}
export default SubHeader;


SubHeader.propTypes = { 
    history: PropTypes.object,
}