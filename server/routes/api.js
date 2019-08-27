const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Student = require('../models/student.model');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user', () => {
    console.log('connected to database')
})

router.get('/', (req, res) => {
    res.send('from api')
});

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData)
    user.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            let payload = {
                subject: data._id
            }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({
                token
            })
        }
    })
});

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({
        username: userData.username
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            if (!data) {
                res.status(401).send('invalid username');
            } else
            if (data.password !== userData.password) {
                res.status(401).send('invalid password');
            } else {
                let payload = {
                    subject: data._id
                }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({
                    token
                })
            }
        }
    })
})

/* CRUD Operation */
router.post('/student/add', (req, res) => {
    if (req.body.sid) {
        let studentData = req.body
        let newStudent = new Student(studentData)
        newStudent.save((err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).send(data)
            }
        })
    }

})

router.get('/student', (req, res) => {
    Student.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(data)
        }
    })
})

router.post('/student/:id', (req, res) => {
    Student.findOneAndUpdate({
        sid: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (err, data) => {
        if (data) {
            res.status(200).send(data)
        } else {
            console.log(err);
        }
    })
})

router.delete("/student/delete/:id", (req, res, next) => {
    const rid = req.params.id;
    Student.findOne({
            sid: rid
        })
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted: true
            });
        })
        .catch(err => {
            console.log(err)
        });
});


module.exports = router;