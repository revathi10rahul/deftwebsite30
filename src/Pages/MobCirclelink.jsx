import React, { useEffect, useRef, useState } from 'react';

const CircleLinks = () => {
    const [windowHeight, setWindowHeight] = useState(150);  // Reduced window height
    const paragraphRef = useRef(null);
    const circleRef = useRef(null);
    const linkRefs = useRef([]);
    const divRef = useRef(null); // Reference for the outer div that holds CircleLinks
    
    const links = [
        { label: 'Discover', bg: '#16a085' },
        { label: 'Diagnose', bg: '#8e44ad' },
        { label: 'Define', bg: '#27ae60' },
        { label: 'Develop', bg: '#f39c12' },
        { label: 'Deliver', bg: '#2980b9' }
    ];

    let radius = windowHeight * 0.72;  // Adjusted radius
    let borderSize = radius * 0.021;  // Border size proportional to radius
    let totalArea = 50;  // Reduced total area for smaller size
    let increment = totalArea / (links.length - 1);
    let startPoint = 0 - (totalArea / 2);
    let fontSize = radius * 0.1;  // Reduced font size
    let linkSize = radius * 0.4;  // Reduced link size

    const styleCircle = () => {
        const circle = circleRef.current;
        circle.style.border = `${borderSize}px solid #fff`;
        circle.style.width = `${radius * 2}px`;
        circle.style.height = `${radius * 2}px`;
        circle.style.borderRadius = `${radius}px`;
        circle.style.position = 'absolute';
        circle.style.top = `-${radius * 0.2}px`;
        circle.style.left = `${radius * -1}px`;
    };

    const styleLinks = () => {
        links.forEach((link, index) => {
            const linkElement = linkRefs.current[index];
            const deg = startPoint + (index * increment);
            linkElement.style.paddingLeft = `${radius * 1.2}px`;
            linkElement.style.fontSize = `${fontSize}px`;  // Adjusted font size
            linkElement.style.height = `${linkSize}px`;  // Adjusted link size
            linkElement.style.lineHeight = `${linkSize}px`;
            setTransformOrigin(linkElement, `0px ${linkSize * 0.5}px`);
            setTransition(linkElement, 'all 0.2s ease-out');
            setTransform(linkElement, `rotate(${deg}deg)`);
            linkElement.style.left = `${borderSize}px`;
            linkElement.style.top = `${(windowHeight / 2) - (windowHeight * 0.1) + borderSize}px`;
        });
    };

    const handleLinkOver = (e, link) => {
        const thisLink = e.target;
        const hover = thisLink.nextSibling;
        thisLink.style.paddingLeft = `${radius * 1.25}px`;
        hover.style.opacity = 1;

        if (divRef.current) {
            divRef.current.style.backgroundColor = thisLink.dataset.color;
        }

        if (thisLink.dataset.color === '#16a085') {
            paragraphRef.current.innerHTML =
                'The Discover Phase consists of a set of activities and tasks to confirm the overall objectives, scope, and critical success factors of the project. During this phase a Steering Committee is established.  The project team is organized and a commitment for user time allocated on the project is secured.  The objectives are stated in terms of business processes, applications, critical dates, resources, and financial targets.  Resource levels are defined for the project in terms of personnel, systems, facilities and hardware.  Planning activities for training are also initiated within this phase and extend throughout the duration of the project.  All are approved by the Steering Committee.';
            paragraphRef.current.style.opacity = 1;
        } else if (thisLink.dataset.color === '#8e44ad') {
            paragraphRef.current.innerHTML =
                'The Diagnose Phase is the set of activities and tasks focused on assessing the data requirements, reporting requirements, and documenting user requirements.  For application enhancement or replacement, the requirements are compared to the current system or procured system’s vanilla functionality to discern existing gaps.  The gaps are analyzed for the most cost-effective solution to eliminate variances.  For database development, the requirements are modeled and entered into a CASE tool as the basis for the Entity Relationship Diagram or (ERD).  Reporting requirements will be analyzed and mapped to the database.  Evaluation of report requirements may be used in determining OLAP and reporting tool recommendations.';
            paragraphRef.current.style.opacity = 1;
        } else if (thisLink.dataset.color === '#27ae60') {
            paragraphRef.current.innerHTML =
                'The Define Phase uses the requirements defined during the Discover and Diagnose phases to develop specific specifications for the design of the application and database.  During this phase a complete detailed design document for all required programs, reports, panels and queries is created and used as a blueprint during development.  Conversions and automated interfaces are also designed during this phase.  All gaps defined in the previous phase serve as the primary design criteria.  An integration prototype should include actual data (both control table and limited transactional), allowing the users to become more familiar with the system through interaction with their own data.';
            paragraphRef.current.style.opacity = 1;
        } else if (thisLink.dataset.color === '#f39c12') {
            paragraphRef.current.innerHTML =
                'The Emerge Phase is the group of activities and tasks where the designs are constructed and tested within the prototype or and the final system is fully tested, individually by application and system-wide across application.  While the system is being fully tested, the user process documentation and policies and procedures are developed and tested.  As pieces of the system are completed they are tested and reviewed by the users and then approved.  Resource allocation of staff and infrastructure are identified and put in place.  Training in the new functionality occurs as soon as the programs are built and the necessary documentation is available.';
            paragraphRef.current.style.opacity = 1;
        } else if (thisLink.dataset.color === '#2980b9') {
            paragraphRef.current.innerHTML =
                'The final phase, Deliver, includes activities and tasks that ensure a smooth implementation and transition to a production environment. Key to this successful transition is a set of tasks that evaluate the project and overall implementation process, focused on providing the most appropriate post-implementation production support.  The technical and project documentation for the system is turned over to the client systems group. ';
            paragraphRef.current.style.opacity = 1;
        }
    };

    const handleLinkOut = (e) => {
        const thisLink = e.target;
        const hover = thisLink.nextSibling;
        thisLink.style.paddingLeft = `${radius * 1.2}px`;
        hover.style.opacity = 0;

        if (divRef.current) {
            divRef.current.style.backgroundColor = '';
        }

        paragraphRef.current.style.opacity = 0;
    };

    const setTransform = (element, string) => {
        element.style.transform = string;
    };

    const setTransformOrigin = (element, string) => {
        element.style.transformOrigin = string;
    };

    const setTransition = (element, string) => {
        element.style.transition = string;
    };

    const updateWindowHeight = () => {
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowHeight);
        styleCircle();
        styleLinks();

        return () => {
            window.removeEventListener('resize', updateWindowHeight);
        };
    }, [windowHeight]);

    return (
        <div className="custom-div" ref={divRef} style={{ position: 'relative', height: '80vh' }}>
            <div ref={circleRef} style={{
                marginTop: "100px",  // Adjusted margin for smaller circle
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h1 style={{
                    color: '#fff',
                    fontSize: '20px',  // Smaller font size for heading
                    fontWeight: 'bold',
                    zIndex: 200,
                    marginLeft: '100px',
                }}>
                    5 D 's
                </h1>
            </div>

            {links.map((link, index) => (
                <div key={index}>
                    <a className='fs-3'
                        href="#"
                        data-color={link.bg}
                        ref={(el) => (linkRefs.current[index] = el)}
                        style={{
                            display: 'inline-block',
                            textDecoration: 'none',
                            marginTop: "100px",  // Reduced margin for links
                            color: 'white',
                            position: 'absolute',
                            zIndex: 100,
                        }}
                        onMouseOver={(e) => handleLinkOver(e, link)}
                        onMouseOut={handleLinkOut}
                    >
                        {link.label}
                    </a>

                    <span
                        style={{
                            position: 'absolute',
                            display: 'inline-block',
                            zIndex: 50,
                            opacity: 0,
                            color: 'white',
                            marginTop: '60px',  // Adjusted margin for the span
                        }}
                    ></span>
                </div>
            ))}

            <p
                ref={paragraphRef}
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '60%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '8px',  // Reduced font size for paragraph
                    width: '70%',
                    textAlign: 'justify',
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    opacity: 0,  // Initially hidden
                }}
            ></p>
        </div>
    );
};

export default CircleLinks;





// import React from 'react'

// function MobCirclelink() {
//   return (
//     <div>
      
//       <div class = 'container-div-card'>
//   <div class = 'container-mob'>
//     <div class = 'card'>
//       <div class = 'image'>
//         <img href = "#" src = 'https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg' />
//       </div>
//       <div class = 'content'>
//         <h3>This is content</h3>
//         <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
//       </div>
//     </div>    
//   </div>
// </div>
// </div>
//   )
// }

// export default MobCirclelink
