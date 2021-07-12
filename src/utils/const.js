import taskManagerThumbnail from '../img/task-manager.png';
import chatAppThumbnail from '../img/chat-app.png';
import gameRentThumbnail from '../img/game-rent.png';
import timeTableThumbnail from '../img/timetable.png';
import billSplitterThumbnail from '../img/bill-splitter.png';
import iotPythonThumbnail from '../img/iot-python.png';

const experiences = [
    {
        index: 0,
        organization: 'Cimpress',
        link: 'http://urls.prayuj.tech/t/cimpress',
        designation: 'Software Engineer',
        duration: 'August 2020 - Present',
        description: [`I currently work at Cimpress’ subsidiary National Pen which is a multi-lingual, Mass Customization E-commerce platform
            operating in 20+ nations.`,
            `Noteable features I have engineered include: Developing and Reengineering of the Website Navigation, Adding User Segmentation to the Website,  
            Incoporating Product Discounts on the Website.`,
            `Various Technologies I have worked with include Magnolia, AWS, Serverlerss, NodeJs, GraphQL, Sentry, to name a few.`]
    },
    {
        index: 1,
        organization: 'Aegis School of Data Science',
        link: 'http://urls.prayuj.tech/t/aegis',
        designation: 'Data Science Intern',
        duration: 'June 2019 - August 2019',
        description: [`Developed a Job Recommendation Model for Students' Placements.`, `Recommended Jobs based on the Job Requirement Skills and Grades of Students in those Skills.`
            , `Building the model included scrapping of Jobs, their requirements, matching skills between the Job and Student.`]
    },
    {
        index: 2,
        organization: 'CaratLane',
        link: 'http://urls.prayuj.tech/t/caratlane',
        designation: 'Software Engineer Intern',
        duration: 'August 2018',
        description: [`Designed and implemented a rule validation system for orders.`]
    }
];

const projects = [
    {
        index: 0,
        name: 'Task Manager',
        image: taskManagerThumbnail,
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://task-manager.prayuj.tech/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/carrot-halwa'
            }
        ],
        desc: `As part of Andrew Meads's Node JS course, I built a Task Manager API along with a Frontend. 
            Features include Logging in, Registering, Adding Notes, Deleting Notes, Sorting Notes all while using JWT for authentication. I used Jest for automation and testing.`,
        languages: 'NodeJS, Express, Mongo, Jest'
    },
    {
        index: 1,
        name: 'Chat App using Socket.io',
        image: chatAppThumbnail, 
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://pillai-chat-app.herokuapp.com/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/butter-chicken'
            }
        ],
        desc: `This was a really exciting Project because for the first time I used Socket.io to make real time, 
            bidirectional communication. Features include entering Room ID and making a new or joining an Existing Room, 
            Sending real time data for communication, Sending Current Location.`,
        languages: 'NodeJS, Socket.io'
    },
    {
        index: 2,
        name: 'Game Renting Service',
        image: gameRentThumbnail,
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://prayuj.github.io/GRS-frontend/#/login'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chaat-papri'
            },
            {
                name: 'linkedinLink',
                link: 'http://urls.prayuj.tech/t/cham-cham'
            }
        ],
        desc: `This Project stemmed from a Job opportunity that was very lucrative which involved building a inventory system. 
            It is a full stack project using React JS, Node JS with Express JS and Mongo DB. 
            Various features include Issue and Return of Games along with OTP generation and validation, 
            viewing list of past transactions, adding inventory and members, updating membership, etc.`,
        languages: 'Mongo, Express, React, Node'
    },
    {
        index: 3,
        name: 'Timetable Generation using AI',
        image: timeTableThumbnail,
        links: [
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chana-dal'
            },
            {
                name: 'youtubeLink',
                link: 'http://urls.prayuj.tech/t/chana-masala'
            },
            {
                name: 'paperLink',
                link: 'http://urls.prayuj.tech/t/chapati'
            }
        ],
        desc: `For the Final Year Project of my Bachelor Program in Computer Engineering, 
            Our Team Developed a Timetable Generator that would create Timetables for a Univeristy, 
            We solved this multiconstraint problem using AI (Genetic Algorithm). 
            We also published a Research Paper regarding the methodology involved.`,
        languages: 'Python, React'
    },
    {
        index: 4,
        name: 'Bill Splitter',
        image: billSplitterThumbnail,
        links: [

            {
                name: 'wesbiteLink',
                link: 'https://bill-splitter.prayuj.tech/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chicken-65'
            }
        ],
        desc: `Have you ever been in a situation where a bunch of your friends are out for a meal 
            and when the Bill comes it's an ordeal to divide everyone's share. Well this takes care of it. 
            Simply add each Dish and the Person Contribution and it will calculate each individual's contribution. 
            It includes splitting taxes, tips, etc. in the appropriate proportion.`,
        languages: 'React, Flask'
    },
    {
        index: 5,
        name: 'Calculator using Arduino with Python',
        image: iotPythonThumbnail,
        links: [
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chicken-biriyani'
            },
            {
                name: 'youtubeLink',
                link: 'http://urls.prayuj.tech/t/chicken-tikka'
            }
        ],
        desc: `One of the earliest Projects I developed back in my Second Year of Engineering. 
            Basically we used an Ardunio as a sort of front end, which took input from a user and displayed 
            the answer using a keypad and LCD screen respectively. 
            For the heavy lifting of computation we chose Python and 
            it's simple function 'eval' to calculate expressions. 
            Data was transferred from the Arduino to Python using the Serial Port.`,
        languages: 'Arduino, Python'
    }

]

const iconObjects = {
    wesbiteLink: 'fas fa-external-link-alt',
    githubLink: 'fab fa-github-square',
    linkedinLink: 'fab fa-linkedin-in',
    youtubeLink: 'fab fa-youtube',
    paperLink: 'fas fa-newspaper'
}

export {experiences, projects, iconObjects}