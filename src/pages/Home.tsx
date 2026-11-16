
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Subjects />
        </div>
    );
}

function Subjects() {
    return (
        <div className="subjects">
            <h1>Subjects</h1>

            <div className="subject-list">
                <div className="subject-item">
                    <h2>Mathematics</h2>
                    <p>Algebra, Geometry, Calculus</p>
                </div>

                <div className="subject-item">
                    <h2>Physics</h2>
                    <p>Mechanics, Thermodynamics, Electromagnetism</p>
                </div>

                <div className="subject-item">
                    <h2>Chemistry</h2>
                    <p>Organic, Inorganic, Physical</p>
                </div>
                <div className="subject-item">
                    <h2>Chemistry</h2>
                    <p>Organic, Inorganic, Physical</p>
                </div>
                <div className="subject-item">
                    <h2>Chemistry</h2>
                    <p>Organic, Inorganic, Physical</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
