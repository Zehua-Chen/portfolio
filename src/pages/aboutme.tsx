import React, { Fragment } from "react";
import Helmet from "react-helmet";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/Layout";
import TextContainer from "../components/TextContainer";
import TextHeading from "../components/TextHeading";
import TextBody from "../components/TextBody";
import TopSpace from "../components/TopSpace";

const styles = (theme: Theme) =>
  createStyles({
    menuButton: {
      color: theme.palette.primary.contrastText,
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
    },
    toolbarTitle: {
      color: theme.palette.primary.contrastText,
      marginLeft: theme.spacing(),
      flexGrow: 1,
    },
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(),
    },
  });

const useStyles = makeStyles(styles);

function AboutMe() {
  const classes = useStyles();

  return (
    <Layout>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <TopSpace />
      <TextContainer>
        <TextBody>
          I am a current undergraduate student in Computer Science +
          Linguistics. I enjoy learning knolwedge and collaborating with others.
        </TextBody>
        <TextHeading>Skills</TextHeading>
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Web Frontend</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>HTML, CSS</li>
                <li>Javascript, Typoescript</li>
                <li>React.js, node.js</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Mobile Frontend</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Swift, Objective-C, Java</li>
                <li>Cocoa, Cocoa Touch, Foundation</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Machine Learning</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Python</li>
                <li>Tensorflow (Keras), Pytorch</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Game</Typography>
            </AccordionSummary>
            <AccordionDetails>C# and Unity</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Others</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>C++</li>
                <li>Python</li>
                <li>A little bit of Rust</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider className={classes.divider} />
        <TextBody>
          In addition, I believe in "the right tool for the right job".
          Therefore, I choose the tech stack to use in projects based on
          criterias like what platform do I deploy against, what set up
          experience do I want my users to have, the tooling of a language,
          library or framework and so on. Because of this philosophy,{" "}
          <b>I am always available learning new skills and technologies</b>
        </TextBody>
        <TextHeading>Academics</TextHeading>
        <TextBody>
          My current GPA is <b>3.85</b> and I am on track to graduate in Spring
          2021
        </TextBody>

        <ul>
          {/* CS */}
          <li>Intro to Computer Science</li>
          <li>Discrete Math</li>
          <li>Data Strucutres</li>
          <li>Computer Architecture</li>
          <li>System Programming</li>
          <li>Probability + Statistics for Computer Science</li>
          <li>Intro to Algorithms + Models of Computation</li>
          <li>Artificial Intelligence</li>
          <li>Virtual Reality</li>
          <li>(Ongoing) Interactive Computer Graphics</li>
          <li>(Ongoing) Programming Language and Compilers</li>
          <li>(Ongoing) Programming Studio</li>
          {/* LING */}
          <li>Intro to Linguistics</li>
          <li>Language Mind and Brain</li>
          <li>Elements of Syntax</li>
          <li>Elements of Semantics and Pragmatics</li>
          <li>Machine Translation</li>
          <li>Intro to Computational Linguistics</li>
          <li>(Ongoing) Corpus Linguistics</li>
        </ul>
        <TextHeading>Experiences</TextHeading>
        <ul>
          <li>CS 125 Course Aide (Spring 2018)</li>
          <li>LING 291 Research Assistant (Fall 2019)</li>
          <li>Mechmania 2018 Visualizer Developer (Spring 2018 - Fall 2018)</li>
          <li>Mechmania 2019 Visualizer Developer (Fall 2018 - Fall 2019)</li>
          <li>Mechmania 2020 Visualizer Lead (Fall 2019 - Fall 2020)</li>
          <li>iOT Virutalization Frontend Lead (Spring 2018 - Current)</li>
        </ul>
        <TextHeading>Personal Life</TextHeading>
        <TextBody>
          In my free time, I like to play Star Craft 2 and Metro Exodus.
        </TextBody>
        <TextHeading>Contact</TextHeading>
        <ul>
          <li>zehuac2@illinois.edu</li>
          <li>(217) 904-9389‬</li>
        </ul>
      </TextContainer>
    </Layout>
  );
}

export default AboutMe;
