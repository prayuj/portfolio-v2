import taskManagerThumbnail from '../img/task-manager.png';
import urlCustomizer from '../img/url-customizer.png';
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
        description: [
            `I currently work at Cimpress’ subsidiary National Pen which is a multi-lingual, Mass Customization E-commerce platform
            operating in 20+ nations.`,
            `Implemented Loqate, an Address Validation Tool, on Checkout and My-Account Pages for Address Suggestions and Sanitization.`,
            `Developed a new Product Data feed for Category and Search pages using Algolia.`, 
            `Integrated an Image Compression Service that compressed images on Product Details pages by upto 80% and thus greatly improving our LCP score.`,
            `Worked on the complete Redesign of Navigation Menu on the Website.`,
            `Worked with Magnolia which is a CMS and developed User Segmentation for a more Tailored Shopping Experience.`,
            `Successfully Integrated Product Discounting to the Website.`,
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
        name: 'Task Manager',
        image: taskManagerThumbnail,
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://task-manager.prayuj.tech/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/carrot-halwa?message=Task%20Manager',
            }
        ],
        desc: `As part of Andrew Meads's Node JS course, I built a Task Manager API along with a Frontend. 
            Features include Logging in, Registering, Adding Notes, Deleting Notes, Sorting Notes all while using JWT for authentication. I used Jest for automation and testing.`,
        languages: 'NodeJS, Express, Mongo, Jest'
    },
    {
        name: 'URL Customizer',
        image: urlCustomizer,
        links: [
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/jalebi?message=URL%20Customizer',
            }
        ],
        desc: `This project works alot like Bitly and other URL shorteners, however in this case I wanted a more customized experience. This application maps any url to 
            a custom and unique endpoint. Whats more, if you don't have a name to give your new custom endpoint, you can set a list of default names. 
            I made use of some delicious Indian food as those defaults and you can see an example of this in the github link below. Most links on this page make use of
            the url shortner.`,
        languages: 'NodeJS, Mongodb'
    },
    {
        name: 'Chat App using Socket.io',
        image: chatAppThumbnail, 
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://pillai-chat-app.herokuapp.com/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/butter-chicken?message=Chat%20App%20using%20Socket.io',
            }
        ],
        desc: `This was a really exciting Project because for the first time I used Socket.io to make real time, 
            bidirectional communication. Features include entering Room ID and making a new or joining an Existing Room, 
            Sending real time data for communication, Sending Current Location.`,
        languages: 'NodeJS, Socket.io'
    },
    {
        name: 'Game Renting Service',
        image: gameRentThumbnail,
        links: [
            {
                name: 'wesbiteLink',
                link: 'https://prayuj.github.io/GRS-frontend/#/login'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chaat-papri?message=Github%3A%20Game%20Renting%20Service',
            },
            {
                name: 'linkedinLink',
                link: 'http://urls.prayuj.tech/t/cham-cham?message=LinkedIn%3A%20Game%20Renting%20Service',
            }
        ],
        desc: `This Project stemmed from a Job opportunity that was very lucrative which involved building a inventory system. 
            It is a full stack project using React JS, Node JS with Express JS and Mongo DB. 
            Various features include Issue and Return of Games along with OTP generation and validation, 
            viewing list of past transactions, adding inventory and members, updating membership, etc.`,
        languages: 'Mongo, Express, React, Node'
    },
    {
        name: 'Timetable Generation using AI',
        image: timeTableThumbnail,
        links: [
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chana-dal?message=Github%3A%20Timetable%20Generation%20using%20AI',
            },
            {
                name: 'youtubeLink',
                link: 'http://urls.prayuj.tech/t/chana-masala?message=YouTube%3A%20Timetable%20Generation%20using%20AI',
            },
            {
                name: 'paperLink',
                link: 'http://urls.prayuj.tech/t/chapati?message=Paper%3A%20Timetable%20Generation%20using%20AI',
            }
        ],
        desc: `For the Final Year Project of my Bachelor Program in Computer Engineering, 
            Our Team Developed a Timetable Generator that would create Timetables for a Univeristy, 
            We solved this multiconstraint problem using AI (Genetic Algorithm). 
            We also published a Research Paper regarding the methodology involved.`,
        languages: 'Python, React'
    },
    {
        name: 'Bill Splitter',
        image: billSplitterThumbnail,
        links: [

            {
                name: 'wesbiteLink',
                link: 'https://bill-splitter.prayuj.tech/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chicken-65?message=Github%3A%20Bill%20Splitter',
            }
        ],
        desc: `Have you ever been in a situation where a bunch of your friends are out for a meal 
            and when the Bill comes it's an ordeal to divide everyone's share. Well this takes care of it. 
            Simply add each Dish and the Person Contribution and it will calculate each individual's contribution. 
            It includes splitting taxes, tips, etc. in the appropriate proportion.`,
        languages: 'React, Flask'
    },
    {
        name: 'Calculator using Arduino with Python',
        image: iotPythonThumbnail,
        links: [
            {
                name: 'githubLink',
                link: 'http://urls.prayuj.tech/t/chicken-biriyani?message=Github%3A%20Calculator%20using%20Arduino%20with%20Python',
            },
            {
                name: 'youtubeLink',
                link: 'http://urls.prayuj.tech/t/chicken-tikka?message=Youtube%3A%20Calculator%20using%20Arduino%20with%20Python',
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