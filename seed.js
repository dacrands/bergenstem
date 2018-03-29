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
        name: 'Radio Drove and Meteor Studies',
        img: 'http://www.bergenstem.org/images/radio.jpg',
        desc: "The Radio JOVE Project was funded by NASA in 1998 " +
              "to help promote interest in radio astronomy and " + 
              "associated technology among high school and college students..."
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