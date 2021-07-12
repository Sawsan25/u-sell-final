import React from "react";
import './LoginPage.module.scss'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardHeader from "components/Card/CardHeader.js";
import logo from "../../assets/img/logo.png";
// import login from "../../assets/img/login.png";
import styles from "assets/jss/material-kit-react/views/loginPage.js";



const useStyles = makeStyles(styles);

export default function LoginPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
    return (
      <div>
        {/* <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        /> */}
        <div
          // className={classes.pageHeader}
          style={{ 
            backgroundImage: `url("https://cdn4.vectorstock.com/i/1000x1000/44/43/abstract-geometric-pink-blue-background-vector-21704443.jpg")`,
            backgroundColor: "#f4b4b8",
            backgroundSize: "cover",
            backgroundPosition: "top center bottom",
          }}
        >
          <div className={classes.container} style={{ width:"30%"}}>
          <GridContainer justify="center" style={{ backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"15px"}} className={classes[cardAnimaton], "form-box"}>
              <GridItem xs={12} sm={12} md={12} style={{marginTop:"10%", marginBottom:"10%"}}>
              <form className={classes.form} >
                    <CardHeader  className={classes.cardHeader}>
                     <img src={logo} alt="Logo" />
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        white ="true"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        white ="true"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off",
                        }}
                      />
                      <br/><br/>
                      <Button
                      color="rose"
                      white ="true"
                      style={{width:"100%", marginBottom: "10px"}}
                    >
                      Connexion
                    </Button><br/>
                    <Button
                      color="rose"
                      style={{width:"100%"}}
                    >
                      Nederands
                    </Button>
                    <GridItem md={12} className={classes.textCenter}>
            
              <Button color="primary" size="sm" simple>
                mot de passe oublié
              </Button>
           
          </GridItem>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    
                    </CardFooter>
                  </form>
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={6} style={{backgroundColor:"#E5E8E8", borderTopRightRadius:"15px", borderBottomRightRadius:"15px"}}>
              <img src={login} alt="U-Sell" style={{width:"85%", marginLeft:"5%", marginTop:"10%", position: "center"}}/>
            </GridItem> */}
          </GridContainer>
          </div>
          {/* <Footer whiteFont /> */}
        </div>
      </div>
    );
}
