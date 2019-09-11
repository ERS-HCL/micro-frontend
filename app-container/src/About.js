import React from 'react';

const About = () => (
    <main id='about'>
        <h1>Micro Frontends</h1>
        <p>
            <span id='pSpan'>Micro frontends</span> is an architectural style where independently deliverable
            frontend applications are composed into a greater whole. 
        </p>
        <p> 
            It's useful for breaking up monolithic frontend codebases into smaller, simpler
            applications that can be delivered to production by multiple teams independently.
        </p>
        {/* eslint-disable-next-line */}
        <img id='mfImg'></img>
    </main>
)

export default About;