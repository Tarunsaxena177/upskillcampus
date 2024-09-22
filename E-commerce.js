const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if any)
app.use(express.static('public'));

app.post('/submit-contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // For now, just log the form data
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    res.send('Thank you for contacting us!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
