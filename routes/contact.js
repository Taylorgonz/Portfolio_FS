const path = require("path");
const router = require("express").Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


// API routes
router.post('/', async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        service:'Outlook365',
        host: 'smtp.office365.com',
        port: '587',
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
            ciphers: 'SSLv3'
        }
    })

    const mailOptions = {
        from: "hello@taylorgonz.com",
        to: "hello@taylorgonz.com",
        subject: `Contact from ${req.body.name} (${req.body.email}): ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error,info)=> {
        if(error){
            console.log(error);
            res.send('error');
        }else {
            console.log('Email sent: ' + info.response )
            res.send('success')
        }
    } )
        });
module.exports = router;