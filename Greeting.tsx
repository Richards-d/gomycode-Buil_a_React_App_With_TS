import React from 'react';

// Step 1: Define the prop types using an interface
interface GreetingProps {
  name: string; // 'name' is required and must be a string
}

// Step 2: Use the GreetingProps interface in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Step 3: Export the component
export default Greeting;
