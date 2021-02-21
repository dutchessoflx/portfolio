import React from 'react';
import {  Text,Flex,Columns,Image, Heading, Divider,Link, Paragraph,Disclosure, Box,Container,PageWithHeader,PageContent,Button,Table, Input, List, Popover, Modal, Card, Navigation, SideNav, Page } from 'bumbag';
import ttt from "../images/tic-tac-toe.png";
import pacman from "../images/tic-tac-pacman.png";
import loans from "../images/game-library-loans.png";
import mario from "../images/game-library-mario.png";
import matrix from "../images/led-matrix.png";
import leaderboard from "../images/tech-job-corp-leaderboard.30.58 pm.png";
import job from "../images/tech-job-corp.png";
import resume from "../images/resume.png";
import video from "../images/led-matrix-video.mov";
import BAfront from "../images/burning-react.png";
import BAback from "../images/burning-rails.png";








const Home = () => {

return(
  <Container>






<Heading fontWeight="lighter" fontFamily="Glegoo" backgroundRepeat="no-repeat"  backgroundImage="url(http://placekitten.com/800100)" alignX="center" margin="0" padding="50px">Brooke Van Eerden</Heading>

    <Navigation alignX="center" aria-label="page links">
      <ul>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#contact">Contact Information</Link>
        </li>
      </ul>
    </Navigation>
    <br/>
  <Paragraph padding="40px" alignX="center" width="72vw" borderRadius="10px" backgroundColor="rgba(46, 120, 125, 0.81)" boxShadow="3px 3px 5px 6px #ccc">

  I have been working for years as a theatrical lighting designer and venue technician, a job which has given me diverse and in depth experiences,  <br/> I have enjoyed creating visual performances for a varied range of audiences from dance schools to corporate dinners.<br/>
  Working in theatre has helped me build a variety of skills, and now I have taken on a new opportunity to up-skill as a software engineer.
  <br/>I am looking forward to utilising my coding and problem-solving skills within a collaborative team that will allow me to continuously learn and grow.


  </Paragraph>
  <Divider/>



<Container id="projects">
<Heading alignX="center" use="h2">Projects</Heading>

  <Columns margin="5px" alignX="center" spacing="major-3" >
  <Columns.Column backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" borderRadius="30px" alignX="center" width="460px" spread={3} margin="5px" >



    <Box width="500px" height="50px" alignX="center">
    <h3>Tic-Tac-Toe</h3>
      <Box
        width="500px" height="50px" alignX="center"
        padding="major-2"
        role="group"
      >
      <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" zIndex="1" className="topimage" borderRadius="30px" width="450px" fit="contain" visibility="visible" _groupHover={{visibility: 'hidden'}}src={ttt} />
      <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" id="pacman" position="absolute" fit="contain" visibility="hidden" _groupHover={{visibility: 'visible'}} src={pacman} borderRadius="30px" width="450px" />
      </Box>
    </Box>

    <Popover.State animated >
        <Popover.Disclosure  marginTop="300px" margin="10px" alignX="left">Skills Used</Popover.Disclosure>
          <Popover slide fade debug alignX="center">HTML/CSS/JavaScript</Popover>
    </Popover.State>


      <Popover.State animated>
            <Popover.Disclosure margin="10px">Project Goal</Popover.Disclosure>
              <Popover slide fade debug>To Create a Functioning Game of Tic-Tac-Toe using JavaScript</Popover>
      </Popover.State>

    <Modal.State animated>
    <Modal.Disclosure margin="10px">My Reflection</Modal.Disclosure>
    <Modal fade slide>
      <Card color="white" backgroundColor="rgba(46, 120, 125, 1)">
        <Box><Heading alignX="center" use="h5">Tic-Tac-Toe-Reflection</Heading><br/>
        I ended up being incredibly proud of this project. I managed to get the core game mechanics sorted fairly early on in the week which gave me plenty of time to troubleshoot some of the more obvious errors. I struggled to decide how to style the CSS for this project, what icons to use etc. Which is in part what caused me to end up enabling the "Theme" option. If I were to repeat this project, I would clean up my code extensively and perhaps not have so much of the css being changed within the Javascript event handlers. I would also like to have a more responsive CSS design</Box>
        <br/>
        <Modal.Disclosure alignX="center" use={Button}>Close</Modal.Disclosure>
      </Card>
    </Modal>
  </Modal.State>


            <ul>
            <li><Button alignX="center" target="_blank" use="a" href="https://github.com/dutchessoflx/tic-tac-toe" backgroundColor="rgba(103, 22, 131, 0.7)">See the Code</Button></li>

            <li><Button alignX="center" target="_blank" use="a" href="https://dutchessoflx.github.io/tic-tac-toe/" backgroundColor="rgba(103, 22, 131, 0.7)">See the Project</Button></li>
            </ul>



</Columns.Column>


<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" width="460px" alignX="center" spread={3}>
<Box width="500px" height="50px" alignX="center">
<h3>Game Library</h3>
  <Box
    width="500px" height="50px" alignX="center"
    padding="major-2"
    role="group"
  >
  <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" zIndex="1" className="topimage" borderRadius="30px" width="450px" fit="contain" visibility="visible" _groupHover={{visibility: 'hidden'}}src={loans} />
  <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" id="pacman" position="absolute" fit="contain" visibility="hidden" _groupHover={{visibility: 'visible'}} src={mario} borderRadius="30px" width="450px" />
  </Box>
</Box>

  <Popover.State animated>
      <Popover.Disclosure marginTop="300px" margin="10px">Skills Used</Popover.Disclosure>
        <Popover slide fade debug>CSS/SQL/
        Postgresql/Rails/Heroku/Cloudinary</Popover>
  </Popover.State>

    <Popover.State animated>
          <Popover.Disclosure margin="10px">Project Goal</Popover.Disclosure>
            <Popover slide fade debug>To use make and use an Postgresql database with at least 3 models. My Theme: Board Game Library-Users can login and borrow board and video games.</Popover>
    </Popover.State>
    <Modal.State animated>
  <Modal.Disclosure margin="10px">My Reflection</Modal.Disclosure>
  <Modal fade slide>
    <Card color="white" backgroundColor="rgba(46, 120, 125, 1)">
      <Box><Heading alignX="center" use="h5">Game Library-Reflection</Heading><br/>
      I really enjoyed working with Rails. The models and associations seemed to almost instantly click for me, despite my lack of confidence in using Ruby as a lanaguage. I did struggle getting the logic of how to 'borrow' a game to make sense for me, but once I took the time to talk it out with the assistance of my teacher, actually writing the code to make it work seemed merely a formality.</Box>
      <br/>
      <Modal.Disclosure alignX="center" use={Button}>Close</Modal.Disclosure>
    </Card>
  </Modal>
</Modal.State>


      <ul>
      <li><Button use="a" target="_blank" href="https://github.com/dutchessoflx/game-library" backgroundColor="rgba(103, 22, 131, 0.7)">See the Code</Button></li>

      <li><Button use="a" target="_blank" href="https://game-library-db.herokuapp.com/" backgroundColor="rgba(103, 22, 131, 0.7)">See the Project</Button></li>
      </ul>


</Columns.Column>
<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" width="460px" alignX="center" spread={3}>
<Box width="500px" height="50px" alignX="center">
<h3>Burning Airlines</h3>
  <Box
    width="500px" height="50px" alignX="center"
    padding="major-2"
    role="group"
  >
  <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" zIndex="1" className="topimage" borderRadius="30px" width="450px" fit="contain" visibility="visible" _groupHover={{visibility: 'hidden'}}src={BAfront} />
  <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" id="pacman" position="absolute" fit="contain" visibility="hidden" _groupHover={{visibility: 'visible'}} src={BAback} borderRadius="30px" width="450px" />
  </Box>
</Box>

  <Popover.State animated>
      <Popover.Disclosure marginTop="300px" margin="10px">Skills Used</Popover.Disclosure>
        <Popover slide fade debug>HTML/CSS/RUBY on Rails/React</Popover>
  </Popover.State>

    <Popover.State animated>
          <Popover.Disclosure margin="10px">Project Goal</Popover.Disclosure>
            <Popover slide fade debug>In a group of three, create a site where you can purchase seat specific tickets to flights</Popover>
    </Popover.State>


    <Modal.State animated>
  <Modal.Disclosure margin="10px">My Reflection</Modal.Disclosure>
  <Modal fade slide>
    <Card color="white" backgroundColor="rgba(46, 120, 125, 1)">
      <Box><Heading alignX="center" use="h5">Burning Airlines-Reflection</Heading><br/>
      I was concerned going into this project we only had 2 days to complete, particularly because I felt completely at a loss when it came to React. I initially volunteered myself to complete the Rails backend, knowing that it was a strength of mine, while my team mates worked on the React front end. Was surprised me was that when my team mates got stuck I offered to help troubleshoot with them, and was quite good at it. I discovered that while at the time I could not write the React code from scratch, I was able to understand it when I read it and to find and fix the problems for my team.</Box>
      <br/>
      <Modal.Disclosure alignX="center" use={Button}>Close</Modal.Disclosure>
    </Card>
  </Modal>
</Modal.State>
      <ul>
      <li><Button use="a" target="_blank" href="https://github.com/dutchessoflx/burning-airlines-backend" backgroundColor="rgba(103, 22, 131, 0.7)">See the Backend Code</Button></li>

      <li><Button use="a"  target="_blank" href="https://github.com/alistairgray/burning-airlines-front-end" backgroundColor="rgba(103, 22, 131, 0.7)">See the Frontend Code</Button></li>
      </ul>


</Columns.Column>
<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" alignX="center" spread={5} width="35vw">
<Box width="500px" height="50px" alignX="center">
<h3>Tech Corp Co. Quiz</h3>
  <Box
    width="500px" height="50px" alignX="center"
    padding="major-2"
    role="group"
  >
  <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" zIndex="1" className="topimage" borderRadius="30px" width="650px" fit="contain" visibility="visible" _groupHover={{visibility: 'hidden'}}src={job} />
  <Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" id="pacman" position="absolute" fit="contain" visibility="hidden" _groupHover={{visibility: 'visible'}} src={leaderboard} borderRadius="30px" width="650px" />
  </Box>
</Box>

  <Popover.State animated>
      <Popover.Disclosure marginTop="400px" margin="10px">Skills Used</Popover.Disclosure>
        <Popover slide fade debug>HTML/CSS/JavaScript/Ruby on Rails/Heroku</Popover>
  </Popover.State>

    <Popover.State animated>
          <Popover.Disclosure margin="10px">Project Goal</Popover.Disclosure>
            <Popover slide fade debug>In a group of 4, use our combined skills to create something great. My Team chose to create a quiz website that was themed around helping us to practise and prepare for potential software engineering interviews</Popover>
    </Popover.State>


    <Modal.State animated>
  <Modal.Disclosure margin="10px">My Reflection</Modal.Disclosure>
  <Modal fade slide>
    <Card color="white" backgroundColor="rgba(46, 120, 125, 1)">
      <Box><Heading alignX="center" use="h5">Tech Corp Co. Quiz-Reflection</Heading><br/>
      This was such a fun project idea. Our team had so many ideas narrowing them down seemed half the battle to begin with. While again I used my skills in Rails in this project, I also found myself often checking in with my team mates and assisting them wherever I could, so there almost wasnt one large chunk of code I could call "mine", but a little bit of my work in everything. I did also take it upon myself to upload our project to Heroku.</Box>
      <br/>
      <Modal.Disclosure alignX="center" use={Button}>Close</Modal.Disclosure>
    </Card>
  </Modal>
</Modal.State>

      <ul>
      <li><Button use="a" target="_blank" href="https://github.com/nimisaya/techjobcorp" backgroundColor="rgba(103, 22, 131, 0.7)">See the Code</Button></li>

      <li><Button use="a" target="_blank" href="https://tech-job-corp-quiz.herokuapp.com/" backgroundColor="rgba(103, 22, 131, 0.7)">See the Project</Button></li>
      </ul>



</Columns.Column>
<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" alignX="center" spread={4} width="38vw">
<Box width="500px" height="50px" alignX="center">
<h3>LED Matrix Messaging</h3>
  <Box
    width="500px" height="50px" alignX="center"
    padding="major-2"
    role="group"
  >
  <Modal.State animated>
  <Modal.Disclosure margin="10px"><Image boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" zIndex="1" className="topimage" borderRadius="30px" width="700px" fit="contain"  _groupHover={{width: '650px'}}src={matrix} /></Modal.Disclosure>
  <Modal duration="100ms" placement="top" fade slide>
  <Card color="white" width="750px" height="670px" borderRadius="30px" backgroundColor="rgba(46, 120, 125, 1)">

      <video controls boxShadow="5px 5px 7px 8px rgba(103, 22, 131, 0.7)" fit="contain"  src={video} borderRadius="30px" >

    </video>
    <br/>
    <Modal.Disclosure alignX="center" use={Button}>Close</Modal.Disclosure>
  </Card>
  </Modal>
  </Modal.State>


</Box>
</Box>


  <Popover.State animated>
      <Popover.Disclosure marginTop="400px" margin="10px">Skills Used</Popover.Disclosure>
        <Popover slide fade debug>HTML/CSS/Ruby on Rails/React/Arduino-Yaml/C++</Popover>
  </Popover.State>
    <Popover.State animated>
          <Popover.Disclosure margin="10px">Project Goal</Popover.Disclosure>
            <Popover slide fade animate>To use Arduino Hardware(LED 8x8 Matrix), to recieve messages from a website</Popover>
    </Popover.State>

    <Modal.State animated>
  <Modal.Disclosure margin="10px">My Reflection</Modal.Disclosure>
  <Modal fade slide>
    <Card color="white" backgroundColor="rgba(46, 120, 125, 1)">
      <Box><Heading alignX="center" use="h5">LED Matrix Messaging-Reflection</Heading><br/>
      This was pushing my boundaires in learning a completely new format for coding. I had issues with online servers so the system currently only works using ngrok on my local server, which mean unfortunately you cannot test it out. I enjoyed trying to understand the similarities between the languages I had already learnt and the new ones I needed to incorporate into this project. I was also nervous to use React but now feel much more confident in my ablities, and quickly found myself creating the front end without much difficulty. I look forward to hopefully creating more projects using Arduino technology in the future.</Box>
      <br/>
      <Modal.Disclosure alignX="center" use={Button}>Close</Modal.Disclosure>
    </Card>
  </Modal>
</Modal.State>

      <ul>
      <li><Button use="a" target="_blank" href="https://github.com/dutchessoflx/react-led-matrix-messaging" backgroundColor="rgba(103, 22, 131, 0.7)">See the Code</Button></li>

      <li><Button use="a" target="_blank" href="https://dutchessoflx.github.io/react-led-matrix-messaging/" backgroundColor="rgba(103, 22, 131, 0.7)">See the Project</Button></li>
      </ul>




</Columns.Column>

</Columns>
</Container>
  <Divider/>
  <Container id="skills">
  <Heading alignX="center" use="h2">Skills</Heading>
  <Paragraph alignX="center">
  <ul>
  <li>Javascript</li>
    <li>Rails</li>
    <li>React</li>
  <li>HTML</li>
  <li>CSS</li>

  <li>Ruby</li>

</ul>
  </Paragraph>
  </Container>
  <Divider/>
  <Container id="contact">
<Heading alignX="center" use="h2">Ready for my next adventure!</Heading>
<Paragraph alignX="center">


<ul>
<li>Email</li>
<li>brooke_vaneerden@hotmail.com</li>


</ul>
</Paragraph>
<Paragraph alignX="center">
<ul>

<li><Button display="inline-flex" target="_blank" use="a" href="https://www.linkedin.com/in/brooke-van-eerden/">LinkedIn</Button></li>

<li><Button display="inline-flex" target="_blank" use="a" href="https://youtu.be/TrAWS8z-6sA">Video Profile</Button></li>


<Modal.State animated>
  <Modal.Disclosure><li><Button target="_blank" width="200px">Resume</Button></li></Modal.Disclosure>
  <Modal fade expand>
    <Card>
      <Box><Image src={resume}/></Box>
      <Modal.Disclosure use={Button}>Close</Modal.Disclosure>
    </Card>
  </Modal>
</Modal.State>
</ul>

</Paragraph>
  </Container>



</Container>
)


}

export default Home;
