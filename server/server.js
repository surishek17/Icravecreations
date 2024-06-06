const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middleware for parsing JSON bodies
app.use(bodyParser.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { phone, email, message } = req.body;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'surishekhar17@gmail.com', // Replace with your email
            pass: 'Himachal@123'   // Replace with your email password
        }
    });

    // Email options
    const mailOptions = {
        from: 'surishekhar17@gmail.com',
        to: 'shekharsuri25@gmail.com', // Replace with the recipient's email
        subject: 'New Contact Form Submission',
        text: `Phone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString()); // Handle errors
        }
        res.status(200).send({ message: 'Email sent: ' + info.response }); // Send success response
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
