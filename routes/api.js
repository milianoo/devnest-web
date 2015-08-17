var meetupList = {
    "meetups" : [{title:'Scaling Microservices + Optimizing with Ansible',
                       date: '26th August 2015',
                       location: 'Exact Asia Development Centre, Suite 8-01, Level 8, GTower, 199, Jalan Tun Razak, Kuala Lumpur, Malaysia',
                       host: 'Exact ADC',
                       image: 'img/meetupcovers/meetup2.jpg',
                       meetup: 'http://www.meetup.com/Docker-Kuala-Lumpur/events/224400906/',
                       eventbribe: 'https://www.eventbrite.com/e/docker-kl-scaling-microservices-optimizing-with-ansible-tickets-18022856850',
                       facebook: 'https://www.facebook.com/groups/docker.kl/',
                       speakers: [{name: 'Tang Tze Chin (Tze)', 
                                   title: 'Delivery Manager at Nintex & DevOps Malaysia committee member'}
                                   ,{name: 'Mohammad Arab', 
                                   title: 'Cloud Engineer at Nintex & Docker KL committee member'}
                                 ],
                       description: 'Scaling up Microservices using docker and automating the process with it. Also using Ansible and docker for optimization your software.'}
                       ,{title:'Docker Intorduction + DevOps',
                       date: '1st July 2015',
                       location: '',
                       host: 'Nintex Malaysia',
                       image: 'img/meetupcovers/meetup1.jpg',
                       meetup: 'http://www.meetup.com/Docker-Kuala-Lumpur/events/222837437/',
                       eventbribe: 'http://www.eventbrite.com/e/hello-docker-tickets-17477010208',
                       facebook: 'https://www.facebook.com/groups/docker.kl/',
                       speakers: [{name: 'Bahman Fakhr Sabahi', 
                                   title: 'Cloud Engineer at Exact ADC'}
                                   ,{name: 'Manuel Riel', 
                                   title: 'DevOps and Python developer'}
                                 ],
                       description: 'about docker and how we it revolutionized software development and deployment by one of the best engineers in field. '}]
};

var peopleList = {
    "people" : [{name: 'Amireza Fatemi',
                      title: 'Software Developer',
                      role: 'Co-Founder',
                      image: 'img/people/amir.jpg',
                      linkedin: 'https://my.linkedin.com/pub/amireza-fatemi/26/574/bb4',
                      facebook: 'https://www.facebook.com/arfo90',
                      twitter: '',
                      github: 'https://github.com/arfo90',
                      email: 'amir@devnest.io',
                      about: 'passionate about technology and how it changes mankind life. Prior to Devnest, Amir has been involved in designing and developing number of cloud based software. In Devnest he is focusing on creating and bridging communities together.'}
                      ,{name: 'Milad Rezazadeh',
                      title: 'Software Developer',
                      role: 'Co-Founder',
                      image: 'img/people/milad.jpg',
                      linkedin: 'https://www.linkedin.com/in/miladrk',
                      facebook: 'https://www.facebook.com/milianoo',
                      twitter: '',
                      github: 'https://github.com/milianoo',
                      email: 'milad@devnest.io',
                      about: 'A software developer, who never hesitates to face the upcoming technology challenges, and loyal team member that greatly helps his team in achieving results. Besides the positive work attitude, Milad\'s strong social skills help him to spread optimism to the people around him.'}
                      ,{name: 'Mohammad Arab',
                      title: 'Cloud Engineer at Nintex',
                      role: 'Speaker & Advisor',
                      image: 'img/people/mohamad.jpg',
                      linkedin: 'https://my.linkedin.com/in/boynux',
                      facebook: 'https://www.facebook.com/boynux',
                      twitter: '',
                      github: 'https://github.com/boynux',
                      email: 'boynux@gmail.com',
                      about: 'He is from Mechanical Engineering background and has been in IT field for more than 10 years working with various technologies. He’s passionate about cloud technologies and dust computing. He is Automation enthusiast and lean practitioner.'}]
};

exports.meetups = function (req,res) {
    var meetups = [];
    meetupList.meetups.forEach(function(meetup, i){
        meetups.push({
            id: i,
            title: meetup.title,
            date: meetup.date,
            
        }) 
    });
}