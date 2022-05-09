import { Col, Container, Row, Button } from "react-bootstrap";
import './home.scss';
import Hero from "../hero";
import Intro from "../into";
import Socials from "../socials";

const Home = () => {
    return (
        <main className="home_container">
            <Hero />
            <Intro />
            <Socials />
        </main>
    )
}

export default Home;