import { Avatar } from "@material-ui/core";
import React from "react";
import "./About.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className="about">
      <Header />
      <div className="about__container">
        <h1 className="about__title">About</h1>
        <div className="about__contact">
          <div className="about__contact1">
            <h1>Juan Alfonso De La Cruz Luque</h1>
            <Avatar
              src="https://media-exp1.licdn.com/dms/image/C5635AQG0M10VoFHw-A/profile-framedphoto-shrink_200_200/0?e=1601406000&v=beta&t=l99rej8563kBc2zKEkVOGmdT7UX5cNi_nJLfEzMEy0M"
              className={`avatar ${classes.large}`}
            />
            <p>
              I'm a full stack web developer from Colombia. Innovate Front End
              developer with 2 years experience building and maintaining
              responsive websites. Proficient in HTML, CSS, Javascript, plus
              modern libraries and frameworks.
            </p>
          </div>
          <div className="about__contact2">
            <h1 className="about__contact2info">Contact me</h1>
            <div className="about__contact2info">
              <PhoneIcon /> <h3> +57 3005007792</h3>
            </div>
            <div className="about__contact2info">
              <EmailIcon /> <h3>Jalfonsodelacruz@unicesar.edu.co</h3>
            </div>
            <div className="about__contact2info">
              <GitHubIcon /> <h3>https://github.com/Juandlc25</h3>
            </div>
            <div className="about__contact2info">
              <LinkedInIcon />{" "}
              <h3>
                www.linkedin.com/in/juan-alfonso-de-la-cruz-luque-4712b71a4
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
