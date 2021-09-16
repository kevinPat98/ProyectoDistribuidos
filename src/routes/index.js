const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', { title : 'primero' });
});

router.get('/contact', (req,res) => {
    res.render('contact.html', { title : 'contact' });
});

module.exports = router;