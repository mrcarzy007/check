import React from 'react'
import "./About.css";

const About = () => {
  return (
    <>
    <div className='container mb-3 about_container ' style={{minHeight:"100%"}}>
    <div className='container  main_container d-flex justify-content-around flex-wrap'>
      <div className='left_container mt-5' style={{width:500}}>
          <h2>Meet Aditya Kumar</h2>
          <p style={{color:"#666",letterSpacing:".5px",marginTop:2,lineHeight:2}}>You got a real attitude problem, McFly. You're a slacker. You remind me of you father when he went her, he was a slacker too. What did I just say? C'mon, open up, let me out of here, Yo. That's Calvin Klein, oh my god, he's a dream. Yeah, but you're uh, you're so, you're so thin.</p>
       </div>
       <div className='right_container mt-3'>
          <img src='photo.jpg' alt='img' />
       </div>
    </div>

    </div>
    </>

    )
}

export default About;