import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: "What is React",
        content: "React is a front end js framework"
    },
    {
        title: "Who uses React",
        content: "The software engineers at WSS"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
];

export default () => {
    return (
        <div><Accordion items={items} /></div>
    );
};