import React, { useState } from "react";
import Header from "./Header";
import Project from "./Project";
import "./Projects.css";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [projectsReact, setProjectsReact] = useState([
    {
      name: "Spotify Clone",
      imgUrl:
        "https://pmcvariety.files.wordpress.com/2020/07/spotify-logo.png?w=892",
      live: "https://juandlc25.github.io/spotify-clone/",
    },
    {
      name: "Covid-19 Tracker",
      imgUrl:
        "https://store-images.s-microsoft.com/image/apps.48107.13801445969156663.b3f1136d-9ccf-4eb9-8454-998a1a29d3ec.4e92c18b-d93d-435a-a5a7-1c713fcdd8bf?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg",
      live: "https://juandlc25.github.io/covid19-tracker/",
    },
    {
      name: "Netflix Clone",
      imgUrl: "https://cdn.forbes.com.mx/2019/07/netflix-1.jpg",
      live: "https://netflix-clone-52a28.web.app/",
    },
    {
      name: "Amazon clone",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/wiXtq4NPpGbNf6PEHTT4hg.jpg",
      live: "https://clone-aaa30.web.app/",
    },
    {
      name: "Weather App",
      imgUrl: "https://image.flaticon.com/icons/png/512/2134/2134677.png",
      live: "https://juandlc25.github.io/weather-app/",
    },
    {
      name: "Tinder Clone",
      imgUrl:
        "https://lh3.googleusercontent.com/Hc7K7VykwNS4YRyQLOVGKytQleFbtxYo1X3lIrFzi_-GRJG8ZkM67B3UzNxxMWqDbyo=w330-h160-rw",
      live: "https://juandlc25.github.io/tinder-clone/",
    },
    {
      name: "Recipe App",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      live: "https://juandlc25.github.io/recipe-app/",
    },
  ]);
  const [projectsJs, setProjectsJs] = useState([
    {
      name: "Menu App",
      imgUrl:
        "https://i0.wp.com/www.catalystweekly.com/wp-content/uploads/2018/05/Factori%CC%81a-Cafe-Laureles-4.jpg?fit=900%2C675&ssl=1",
      live: "https://juandlc25.github.io/menu-app/",
    },
    {
      name: "To do App",
      imgUrl:
        "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps-1400x1050.png",
      live: "https://juandlc25.github.io/todoapp/",
    },
    {
      name: "E-Commerce",
      imgUrl:
        "https://www.womgp.com/blog/wp-content/uploads/2019/12/ecommerce.png",
      live: "https://juandlc25.github.io/e-commerce/",
    },
    {
      name: "Calcular Promedio",
      imgUrl: "https://i.ytimg.com/vi/dn1SRHafxMc/hqdefault.jpg",
      live: "https://juandlc25.github.io/calcular-promedio/",
    },
  ]);
  const [projectsQuery, setProjectsQuery] = useState([
    {
      name: "Snake Game",
      imgUrl:
        "https://hackster.imgix.net/uploads/attachments/431013/snake_dvlfwCony2.png?auto=compress&w=900&h=675&fit=min&fm=jpg",
      live: "https://juandlc25.github.io/snakegame-with-jquery/",
    },
    {
      name: "Tic Tac Toe",
      imgUrl: "https://miro.medium.com/max/2402/1*bpYZjEmxCoqYZrIgn4FC6g.jpeg",
      live: "https://juandlc25.github.io/tic-tac-toe/",
    },
  ]);
  return (
    <div className="projects">
      <Header />
      <div className="projects__container">
        <div>
          <h1 className="projects__title">Projects</h1>
        </div>
      </div>
      <div className={`projects__full ${classes.root}`}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="ReactJs" {...a11yProps(0)} />
            <Tab label="Vanilla Javascript" {...a11yProps(1)} />
            <Tab label="jQuery" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={(index) => setValue(index)}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="projects__project">
              {projectsReact.map((project) => (
                <Project
                  name={project.name}
                  img={project.imgUrl}
                  live={project.live}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="projects__project">
              {projectsJs.map((project) => (
                <Project
                  name={project.name}
                  img={project.imgUrl}
                  live={project.live}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="projects__project">
              {projectsQuery.map((project) => (
                <Project
                  name={project.name}
                  img={project.imgUrl}
                  live={project.live}
                />
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default Projects;
