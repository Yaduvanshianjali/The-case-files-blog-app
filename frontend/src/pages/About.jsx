import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-gray-50 rounded-lg shadow-lg">
      {/* <Nav className="me-auto">
  <Nav.Link 
    as={Link} 
    to={`/discussion`} 
    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
  >
    Discussion
  </Nav.Link>
</Nav> */}


      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
        About Our Q&A Platform
      </h1>
      <p className="text-gray-700 text-lg text-center mb-6">
        We aim to create a knowledge-sharing community where users can interact, vote on answers,
        and even participate in polls within chat rooms.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Technology Stack</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li><span className="font-semibold text-blue-500">Frontend:</span> React, Tailwind CSS</li>
          <li><span className="font-semibold text-green-500">Backend:</span> Node.js, Express</li>
          <li><span className="font-semibold text-purple-500">Database:</span> MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
