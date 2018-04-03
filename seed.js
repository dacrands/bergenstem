const mongoose = require('mongoose');
const Project = require('./models/projects');

const seedData = [
    {
        name: 'Radio Drove and Meteor Studies',
        img: 'http://www.bergenstem.org/images/radio.jpg',
        desc: "The Radio JOVE Project was funded by NASA in 1998 " +
              "to help promote interest in radio astronomy and " + 
              "associated technology among high school and college students..."
    },
    {
        name: 'Solar Concentrator',
        img: 'http://www.bergenstem.org/images/solar.jpg',
        desc: "The purpose of this project is to produce electricity by using the solar energy. In order to do so, STEM students bend a plastic-glass into a shape of a parabola by applying a momentum and force on the edges."
    },
    {
        name: 'High Altitude Balloon',
        img: 'http://www.bergenstem.org/images/highalt1.jpg',
        desc: "The High Altitude Balloon team builds electronic sensorpayloads as well as other types of experiments and launches them 100,000 feet into the air..."
    }
]

function seedDB() {
    Project.remove({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log('Removed sessions');

        // Add seed
        seedData.forEach(function(seed){
            if (err) {
                console.log('error');
            } else {
                Project.create(seed, function(err, session){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Session created');
                    }
                })
            }
        })
    });
}

module.exports = seedDB;