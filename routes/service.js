const express = require('express')
const { addAdvertisement, getAdvertisement } = require('../controllers/advertisement')
const { addMarquee, getMarquee } = require('../controllers/marquee')
const router = express.Router()


router.post('/marquee',addMarquee);

router.get('/marquee',getMarquee);

router.post('/advertisement',addAdvertisement);

router.get('/advertisement',getAdvertisement);

module.exports = router;