const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', { title : 'UPTC' });
});
router.get('/contact', (req,res) => {
    res.render('contact.html', { title : 'contact' });
});
router.get('/soga', (req,res) => {
    res.render('soga.html', { title : 'soga' });
});
router.get('/index', (req,res) => {
    res.render('index.html', { title : 'Inicio' });
});
module.exports = router;