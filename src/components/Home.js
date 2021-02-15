import React from 'react';
import {  Text,Flex,Columns,Image, Heading, Divider,Link, Paragraph,Disclosure, Box,Container,PageWithHeader,PageContent,Button,Table, Input } from 'bumbag';



const Home = () => {

return(
<Container>

<Heading backgroundRepeat="no-repeat"  backgroundImage="url(http://placekitten.com/800100)" alignX="center">Brooke Van Eerden</Heading>
  <Paragraph alignX="center" width="1000px">
  I have been working for years as a theatrical lighting designer and venue technician, a job which has given me diverse and in depth experiences, I have enjoyed creating visual performances for a varied range of audiences from dance schools to corporate dinners.<br/>
   Working in theatre has helped me build a variety of skills, and now I have taken on a new opportunity to up-skill as a software engineer.

<br/>I am looking forward to utilising my coding and problem-solving skills within a collaborative team that will allow me to continuously learn and grow.


  </Paragraph>




<Heading alignX="center" use="h2">Projects</Heading>

  <Columns margin="5px" alignX="center" spacing="major-3" >
  <Columns.Column backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" borderRadius="40px" alignX="center" spread={4} margin="5px" >
    <Box width="400px" height="50px" alignX="center">
    Tic-Tac-Toe
    </Box>

    <Table border="none">
    <Table.Head>
    <Table.Row>
    <Disclosure.State>
      <Table.HeadCell width='400px' backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" >
        <Disclosure>Skills Used</Disclosure>
          <Disclosure.Content>HTML/CSS/JavaScript</Disclosure.Content>
        </Table.HeadCell>
    </Disclosure.State>
      </Table.Row>

      <Table.Row>
      <Disclosure.State>
        <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
            <Disclosure>Project Goal</Disclosure>
              <Disclosure.Content>To Create a Functioning Game of Tic-Tac-Toe using JavaScript</Disclosure.Content>
        </Table.HeadCell>
      </Disclosure.State>
      </Table.Row>

      <Table.Row>
      <Disclosure.State>
      <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
          <Disclosure>My Reflection</Disclosure>
            <Disclosure.Content>I ended up being incredibly proud of this project. I managed to get the core game mechanics sorted fairly early on in the week which gave me plenty of time to troubleshoot some of the more obvious errors. I struggled to decide how to style the CSS for this project, what icons to use etc. Which is in part what caused me to end up enabling the "Theme" option. If I were to repeat this project, I would clean up my code extensively and perhaps not have so much of the css being changed within the Javascript event handlers. I would also like to have a more responsive CSS design</Disclosure.Content>
      </Table.HeadCell>
      </Disclosure.State>
      </Table.Row>

      <Table.Row>
      <Disclosure.State>
      <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
          <Disclosure>Links</Disclosure>
            <Disclosure.Content>
            <ul>
            <li>GitHub<br/><Link color="rgba(46, 120, 125, 0.81)">https://github.com/dutchessoflx/tic-tac-toe</Link></li>
            </ul>
            <ul>
            <li>GitHub Pages</li><br/>
            <li><Link color="rgba(46, 120, 125, 0.81)">https://dutchessoflx.github.io/tic-tac-toe/</Link></li>
            </ul>
            </Disclosure.Content>
      </Table.HeadCell>
      </Disclosure.State>
      </Table.Row>
      </Table.Head>

    </Table>


</Columns.Column>


<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" alignX="center" spread={4}>
  <Box width="400px" height="50px" alignX="center" >
  Game Library
  </Box>
  <Table border="none">
  <Table.Head>
  <Table.Row>
  <Disclosure.State>
    <Table.HeadCell width="400px" backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
      <Disclosure>Skills Used</Disclosure>
        <Disclosure.Content>CSS/SQL/
        Postgresql/Ruby on Rails/Heroku/Cloudinary</Disclosure.Content>
      </Table.HeadCell>
  </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
      <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
          <Disclosure>Project Goal</Disclosure>
            <Disclosure.Content>To use make and use an Postgresql database with at least 3 models. My Theme: Board Game Library-Users can login and borrow board and video games.</Disclosure.Content>
      </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
        <Disclosure>My Reflection</Disclosure>
          <Disclosure.Content>I really enjoyed working with Rails. The models and associations seemed to almost instantly click for me, despite my lack of confidence in using Ruby as a lanaguage. I did struggle getting the logic of how to 'borrow' a game to make sense for me, but once I took the time to talk it out with the assistance of my teacher, actually writing the code to make it work seemed merely a formality.</Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
        <Disclosure>Links</Disclosure>
          <Disclosure.Content>
          <ul>
          <li>GitHub</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://github.com/dutchessoflx/game-library</Link></li>
          </ul>
          <ul>
          <li>Heroku</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://game-library-db.herokuapp.com/</Link></li>
          </ul>
          </Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    </Table.Head>

  </Table>

</Columns.Column>
<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" alignX="center" spread={4}>
  <Box width="400px" height="50px" alignX="center">
  Burning Airlines
  </Box>
  <Table border="none">
  <Table.Head>
  <Table.Row >
  <Disclosure.State>
    <Table.HeadCell width="400px" backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
      <Disclosure>Skills Used</Disclosure>
        <Disclosure.Content>HTML/CSS/RUBY on Rails/React</Disclosure.Content>
      </Table.HeadCell>
  </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
      <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
          <Disclosure>Project Goal</Disclosure>
            <Disclosure.Content>In a group of 3, create a site where you can purchase seat specific tickets to flights</Disclosure.Content>
      </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
        <Disclosure>My Reflection</Disclosure>
          <Disclosure.Content>I was concerned going into this project we only had 2 days to complete, particularly because I felt completely at a loss when it came to React. I initially volunteered myself to complete the Rails backend, knowing that it was a strength of mine, while my team mates worked on the React front end. Was surprised me was that when my team mates got stuck I offered to help troubleshoot with them, and was quite good at it. I discovered that while at the time I could not write the React code from scratch, I was able to understand it when I read it and to find and fix the problems for my team.</Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
        <Disclosure>Links</Disclosure>
          <Disclosure.Content>
          <ul>
          <li>GitHub-backend</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://github.com/dutchessoflx/burning-airlines-backend</Link></li>
          </ul>
          <ul>
          <li>GitHub-frontend-code</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://github.com/alistairgray/burning-airlines-front-end</Link></li>
          </ul>
          </Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    </Table.Head>

  </Table>

</Columns.Column>
<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" alignX="center" spread={4}>
  <Box width="400px" height="50px" alignX="center">
  Tech Corp Co. Quiz
  </Box>

  <Table border="none">
  <Table.Head>
  <Table.Row>
  <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
      <Disclosure>Skills Used</Disclosure>
        <Disclosure.Content>HTML/CSS/JavaScript/Ruby on Rails/Heroku</Disclosure.Content>
      </Table.HeadCell>
  </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
      <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
          <Disclosure>Project Goal</Disclosure>
            <Disclosure.Content>In a group of 4, use our combined skills to create something great. My Team chose to create a quiz website that was themed around helping us to practise and prepare for potential software engineering interviews</Disclosure.Content>
      </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
        <Disclosure>My Reflection</Disclosure>
          <Disclosure.Content>This was such a fun project idea. Our team had so many ideas narrowing them down seemed half the battle to begin with. While again I used my skills in Rails in this project, I also found myself often checking in with my team mates and assisting them wherever I could, so there almost wasnt one large chunk of code I could call "mine", but a little bit of my work in everything. I did also take it upon myself to upload our project to Heroku. </Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
        <Disclosure>Links</Disclosure>
          <Disclosure.Content>
          <ul>
          <li>GitHub</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://github.com/nimisaya/techjobcorp</Link></li>
          </ul>
          <ul>
          <li>Heroku</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://tech-job-corp-quiz.herokuapp.com/</Link></li>
          </ul>
          </Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    </Table.Head>

  </Table>


</Columns.Column>
<Columns.Column color="rgba(46, 120, 125, 0.81)" margin="5px" backgroundColor="primary" borderRadius="20px" alignX="center" spread={4}>
  <Box width="400px" height="50px" alignX="center" >
  LED Matrix Messaging
  </Box>

  <Table border="none">
  <Table.Head>
  <Table.Row>
  <Disclosure.State>
    <Table.HeadCell width="400px" backgroundColor="primary" color="rgba(46, 120, 125, 0.81)">
      <Disclosure>Skills Used</Disclosure>
        <Disclosure.Content>HTML/CSS/Ruby on Rails/React/Arduino-Yaml/C++</Disclosure.Content>
      </Table.HeadCell>
  </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
      <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
          <Disclosure>Project Goal</Disclosure>
            <Disclosure.Content>To use Arduino Hardware(LED 8x8 Matrix), to recieve messages from a website</Disclosure.Content>
      </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>

    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
        <Disclosure>My Reflection</Disclosure>
          <Disclosure.Content>This was pushing my boundaires in learning a completely new format for coding. I had issues with online servers so the system currently only works using ngrok on my local server. I enjoyed trying to understand the similarities between the languages I had already learnt and the new ones I needed to incorporate into this project. I was also nervous to use React but now feel much more confident in my ablities, and quickly found myself creating the front end without much difficulty. I look forward to hopefully creating more projects using Arduino technology in the future.</Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    <Table.Row>
    <Disclosure.State>
    <Table.HeadCell backgroundColor="primary" color="rgba(46, 120, 125, 0.81)" width="400px">
        <Disclosure>Links</Disclosure>
          <Disclosure.Content>
          <ul>
          <li>GitHub Code</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://github.com/dutchessoflx/react-led-matrix-messaging</Link></li>
          </ul>
          <ul>
          <li>GitHub Pages</li>
          <li><Link color="rgba(46, 120, 125, 0.81)">https://dutchessoflx.github.io/react-led-matrix-messaging/</Link></li>
          </ul>
          </Disclosure.Content>
    </Table.HeadCell>
    </Disclosure.State>
    </Table.Row>
    </Table.Head>

  </Table>


</Columns.Column>

</Columns>
  <Divider/>
  <Container>
  <Heading alignX="center" use="h2">Skills</Heading>
  <Paragraph alignX="center">
  <ul>
  <li>Javascript</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>Ruby</li>
  <li>Ruby on Rails</li>
  <li>React</li>
</ul>
  </Paragraph>
  </Container>
  <Divider/>
  <Container>
<Heading alignX="center" use="h2">Contact</Heading>
<Paragraph alignX="center">
<ul>
<li>Email</li>
<li>brooke_vaneerden@hotmail.com</li>
</ul>
<ul>
<li>LinkedIn</li>
<li><Link>https://www.linkedin.com/in/brooke-van-eerden/</Link></li>
</ul>
<ul>
<li>Video Profile</li>
<li><Link>https://youtu.be/TrAWS8z-6sA</Link></li>
</ul>
<ul>
<li>Resume</li>
<li><Link>https://drive.google.com/file/d/1Ui9ngr7-Tx-2tE0jU-4NqLdwO2h_eyNT/view?usp=sharing</Link></li>
</ul>

</Paragraph>
  </Container>



</Container>
)


}

export default Home;
