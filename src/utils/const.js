import taskManagerThumbnail from '../img/task-manager.webp';
import urlCustomizer from '../img/url-customizer.webp';
import chatAppThumbnail from '../img/chat-app.webp';
import gameRentThumbnail from '../img/game-rent.webp';
import timeTableThumbnail from '../img/timetable.webp';
import billSplitterThumbnail from '../img/bill-splitter.webp';
import iotPythonThumbnail from '../img/iot-python.webp';

const experiences = [
    {
        index: 0,
        organization: 'Cimpress',
        link: 'http://urls.prayujpillai.tech/t/cimpress',
        designation: ' Senior Software Engineer',
        duration: 'August 2020 - July 2022',
        description: [
            `Operated in National Pen, Cimpress’ 2nd largest Business Unit, to build a multi-tenant end-to-end micro-services based E-commerce platform operational in 24+  countries.
            `,
            `Led the complete redesign of category and search pages along with Algolia integration, an AI powered product data feed,
            which led to a 46% increase in customer conversions from these pages to product pages and a 24% increase in overall
            revenue.`,
            `Incorporated Loqate, an address validation tool, on checkout and my account pages which led to a 9% decrease in cart
            abandonment and reduced last-mile miss deliveries by half.`, 
            `Engineered an in-house image compression service that improved image sizes uploaded by marketing teams resulting in a
            reduction of “Bad URLs”, pages with Largest Contentful Paint (LCP) scores > 4 secs, on desktops devices from 1100 urls to
            0 and 2500 urls to 1100 on mobile devices.`,
            `Integrated x-functional team’s React Components onto the E-commerce’s non-React pages to improve data consistency
            and user experience.`,
            `Replaced core-js polyfills with Polyfill.io, a service that dynamically returns polyfills based on the requesting browser.
            Minimized bundle size by 150KB and brought down Total Blocking Time (TBT) from ~3.2 secs to ~1.1 secs.`]
    },
    {
        index: 1,
        organization: 'Aegis School of Data Science',
        link: 'http://urls.prayujpillai.tech/t/aegis',
        designation: 'Data Science Intern',
        duration: 'June 2019 - August 2019',
        description: [`Developed a Job Recommendation Model for Students' Placements.`, `Recommended Jobs based on the Job Requirement Skills and Grades of Students in those Skills.`
            , `Building the model included scrapping of Jobs, their requirements, matching skills between the Job and Student.`]
    },
    {
        index: 2,
        organization: 'CaratLane',
        link: 'http://urls.prayujpillai.tech/t/caratlane',
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
                link: 'https://task-manager.prayujpillai.tech/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayujpillai.tech/t/carrot-halwa?message=Task%20Manager',
                rel: 'nofollow'
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
                link: 'http://urls.prayujpillai.tech/t/jalebi?message=URL%20Customizer',
                rel: 'nofollow'
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
                link: 'http://urls.prayujpillai.tech/t/butter-chicken?message=Chat%20App%20using%20Socket.io',
                rel: 'nofollow'
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
                link: 'http://urls.prayujpillai.tech/t/chaat-papri?message=Github%3A%20Game%20Renting%20Service',
                rel: 'nofollow'
            },
            {
                name: 'linkedinLink',
                link: 'http://urls.prayujpillai.tech/t/cham-cham?message=LinkedIn%3A%20Game%20Renting%20Service',
                rel: 'nofollow'
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
                link: 'http://urls.prayujpillai.tech/t/chana-dal?message=Github%3A%20Timetable%20Generation%20using%20AI',
                rel: 'nofollow'
            },
            {
                name: 'youtubeLink',
                link: 'http://urls.prayujpillai.tech/t/chana-masala?message=YouTube%3A%20Timetable%20Generation%20using%20AI',
                rel: 'nofollow'
            },
            {
                name: 'paperLink',
                link: 'http://urls.prayujpillai.tech/t/chapati?message=Paper%3A%20Timetable%20Generation%20using%20AI',
                rel: 'nofollow'
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
                link: 'https://bill-splitter.prayujpillai.tech/'
            },
            {
                name: 'githubLink',
                link: 'http://urls.prayujpillai.tech/t/chicken-65?message=Github%3A%20Bill%20Splitter',
                rel: 'nofollow'
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
                link: 'http://urls.prayujpillai.tech/t/chicken-biriyani?message=Github%3A%20Calculator%20using%20Arduino%20with%20Python',
                rel: 'nofollow'
            },
            {
                name: 'youtubeLink',
                link: 'http://urls.prayujpillai.tech/t/chicken-tikka?message=Youtube%3A%20Calculator%20using%20Arduino%20with%20Python',
                rel: 'nofollow'
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