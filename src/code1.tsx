import React from 'react';

// Define the type for the props
interface GreetingProps {
  name: string; // the name should be a string
}

// Define the functional component using TypeScript with the name as a prop
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
