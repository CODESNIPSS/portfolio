import './home.scss';
import Hero from "../hero";
import Intro from "../into";

const Home = () => {
    return (
        <main className="home_container">
            <Hero />
            <Intro />
        </main>
    )
}

export default Home;