import React from 'react';
import HOC from './HOC';

const Hello = ({ name }) => <h1>hello {name}</h1>;

export default HOC(Hello);
