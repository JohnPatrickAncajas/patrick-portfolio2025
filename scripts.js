document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();

    const projects = [
        { id: 9, title: "DOST START Homepage", description: "Led the front-end development of the official homepage for the DOST START initiative, focusing on accessibility, modern UI design, and responsive performance across all devices.", image: "./images/doststart.png", stack: "Next.js, Tailwind CSS", link: "https://dost-start-website.vercel.app/" },
        { id: 6, title: "Fayleaf", description: "An e-commerce application designed for high performance and scalability, utilizing Next.js, Tailwind CSS, and MySQL for a fast and reliable user experience.", image: "./images/fayleaf.png", stack: "Next.js, Tailwind CSS, MySQL", link: "#" },
        { id: 7, title: "Veritas", description: "A web application utilizing an EfficientNet AI model, deployed via a Python backend on Render, to classify and differentiate between AI-generated, real, 2D, and 3D human faces.", image: "./images/veritas.png", stack: "React, Tailwind CSS, Python (EfficientNet AI), Render", link: "https://veritas-face-type-detection.vercel.app/" },
        { id: 8, title: "Curavista", description: "A comprehensive cancer information site featuring research articles and resources, built with a modern React/Tailwind frontend.", image: "./images/curavista.png", stack: "React, Tailwind CSS", link: "https://curavista.vercel.app/" },
        { id: 3, title: "QuizMe", description: "A collaborative quiz platform where users can create, share, and take quizzes made by other users, fostering a knowledge-sharing community.", image: "./images/quizme.png", stack: "Django, Python", link: "#" }
    ];

    const smallerProjects = [
        { id: 1, title: "Flap It!", description: "A Telegram mini-app, integrating crypto elements for a fast-paced, addictive gameplay experience, developed during the TON Hackathon.", image: "./images/flapit.png", stack: "HTML5, CSS3, JavaScript", link: "https://flap-it.vercel.app/" },
        { id: 2, title: "Agenda", description: "Take control of your time and tasks with Agenda, where you can easily structure your day or event schedules in just a few clicks.", image: "./images/agenda.png", stack: "HTML5, CSS3, JavaScript", link: "https://johnpatrickancajas.github.io/Agenda/" },
        { id: 3, title: "Matrix", description: "A simple 2D demonstration on how matrices are used in game transformations (translation, rotation, scaling), built purely with vanilla JavaScript.", image: "./images/matrix.png", stack: "HTML5, CSS3, JavaScript", link: "https://johnpatrickancajas.github.io/Matrix/" },
        { id: 4, title: "The Wall of Projects", description: "A collaborative platform for showcasing a diverse range of projects, offering project details, code, and live links to foster community sharing among developers.", image: "./images/thewallofprojects.png", stack: "React, Tailwind CSS, Netlify", link: "https://the-wall-of-projects.netlify.app/" },
        { id: 5, title: "Timestamp", description: "A minimalist digital clock and date display, elegantly pairing real-time time tracking with inspirational quotes that rotate hourly and daily.", image: "./images/timestamp.png", stack: "HTML5, CSS3, JavaScript", link: "https://johnpatrickancajas.github.io/Timestamp/" },
        { id: 6, title: "OpenQuotes", description: "An open-source collection of inspirational quotes where the community can contribute their favorite quotes and join the journey to inspire the world.", image: "./images/openquotes.png", stack: "HTML5, CSS3, JavaScript, Open Source", link: "https://mrashwin2142.github.io/OpenQuotes/" },
        { id: 7, title: "Personal Org Homepage", description: "A simple, clean homepage for COMPASS, a student organization, demonstrating fundamental design and information architecture skills.", image: "./images/compass.png", stack: "HTML5, CSS3", link: "https://johnpatrickancajas.github.io/COMPASS/" },
        { id: 8, title: "CS50x-Finance-Problem-Set", description: "A full-stack web application for stock trading simulation, allowing logged-in users to buy, sell, and view their stock portfolio using Python, HTML, and CSS.", image: "./images/finance.png", stack: "Python, HTML5, CSS3", link: "#" },
        { id: 9, title: "Memo", description: "A simple, yet elegant note-taking application demonstrating core front-end skills in HTML, CSS, and JavaScript.", image: "./images/memo.png", stack: "HTML5, CSS3, JavaScript", link: "https://johnpatrickancajas.github.io/Memo/" }
    ];

const skills = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "Typescript", icon: "fas fa-file-code" },
    { name: "React", icon: "fab fa-react" },
    { name: "React Native", icon: "fas fa-mobile-alt" },
    { name: "Vue", icon: "fab fa-vuejs" },
    { name: "Next.js", icon: "fas fa-bolt" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "Tailwind CSS", icon: "fas fa-wind" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Django", icon: "fas fa-leaf" }, 
    { name: "C#", icon: "fas fa-code-branch" }, 
    { name: "Java", icon: "fab fa-java" },
    { name: "C", icon: "fas fa-code" },
    { name: "C++", icon: "fas fa-terminal" },
    { name: "Unity", icon: "fab fa-unity" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express", icon: "fas fa-server" },
    { name: "Git & GitHub", icon: "fab fa-github" },
    { name: "SQL/MySQL", icon: "fas fa-database" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "Debugging", icon: "fas fa-bug" },
];

const FALLBACK_IMAGE_URL = "https://placehold.co/600x400/1e293b/94a3b8?text=Project+Image";

const renderProjectCards = (containerId, projectArray) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    
    projectArray.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        const isDimmed = project.link === '#' || !project.link;
        
        const stackTags = project.stack ? project.stack.split(', ').map(tech => 
            `<span class="stack-tag">${tech}</span>`
        ).join('') : '';

        const buttonClass = isDimmed ? 'view-button dimmed' : 'view-button';
        const buttonText = isDimmed ? 'No Live Link' : 'View Project';
        const buttonHref = isDimmed ? '#' : project.link;

        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title} preview" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE_URL}';" />
            </div>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="project-stack-tags">${stackTags}</div>
            <div class="project-actions">
                <a href="${buttonHref}" class="${buttonClass}" ${isDimmed ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>${buttonText}</a>
            </div>
        `;
        container.appendChild(projectCard);
    });
};


const renderSkills = () => {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <i class="${skill.icon}" style="font-size: 2.5rem; color: var(--color-accent); margin-bottom: 0.5rem;"></i>
            <p>${skill.name}</p>
        `;
        container.appendChild(skillItem);
    });
};

const renderProjects = () => {
    renderProjectCards('projects-container', projects);
};

const renderSmallerProjects = () => {
    renderProjectCards('smaller-projects-container', smallerProjects);
};

const createRipple = (event) => {
    let x, y;
    if (event.touches) {
        if (event.touches.length > 1) return;
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }

    if (event.target.closest('a') || event.target.closest('button') || event.target.closest('.skill-item') || event.target.closest('.project-card')) {
        return; 
    }

    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
};

document.body.addEventListener('click', createRipple);

renderSkills();
renderProjects();
renderSmallerProjects();
});