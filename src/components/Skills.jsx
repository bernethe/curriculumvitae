import React from 'react';

const Skills = props => (
    <div className="Skills">
        <div className="Skill-container">

            {props.data.map((skill,index) => (
            <div className="Skill-item" key={`Skill-${index}`}>
                <h5>{skill.name}</h5>
                <div className="Skill-line">
                    <span>{skill.percentage}</span>
                </div>
            </div>
            ))}

        </div>
    </div>
);

export default Skills;