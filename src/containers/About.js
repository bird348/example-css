import Nav from "../components/Nav";

function About() {
    return(
        <>
            <Nav />
            <div style={{display: "block", textAlign: "center", border: "solid", margin: "10px 20px"}}>
                
                <h3 style={{color: "green"}}>About me</h3>
                <p style={{color: "gray"}}>How to css.</p>
            </div>
        </>
        
    )
}

export default About;