import React from 'react';
import "./Home.css";
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <>
        <div className='container home_container'>           
            <div className='home_innerdiv'>
            <div className='left_div'>
                <h2>Wellcome to <span style={{color:"#8B5EEC"}}>Aditya Kumar</span></h2>
                  <p style={{color:"#666", letterSpacing :".5px", marginTop:2 }}>
“I'm not a great programmer; I'm just a good programmer with great habits.<br/> <br/>
The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.”


.</p>
                  <div className='btn_div mt-4 '>
                  <Button variant="outline-primary" style={{color:"#666", letterSpacing :"1px", border: "none", borderRadius:4 ,background:"#2f2d69" , marginRight:24 }}>Resume</Button>
                  <Button variant="outline-primary" style={{color:"#8B5EEC", letterSpacing :"1px", border: "none", borderRadius:4 ,background:"#2f2d69"  }}>Projects</Button>
                  </div>
            </div>
            <div className='right_div'>
                <img src='code.png' alt='img' / >
                
                </div>

            </div>            
             </div>
        
        </>
    )
}

export default Home;