import { Link, Route, Routes } from "react-router-dom";

import AboutUs from "./AboutUs";
import Mission from "./Mission";
import OurValues from "./OurValues";

const About = () => {
    return (
        <>
            <h2>About Page</h2>
            <nav>
                <Link to="us">About Us</Link>
                <Link to="misson">Mission</Link>
                <Link to="values">Our Values</Link>
                {/* absolutePath */}
            </nav>
            <Routes>
                <Route path="/us" element={<AboutUs />} />
                <Route path="/misson" element={<Mission />} />
                <Route path="/values" element={<OurValues />} />

            </Routes>
        </>

    );
};
export default About;