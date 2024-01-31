const { Router } = require('express')


const router = Router()

router.get('/signup', eventController.signup_get)
router.post('/signup', eventController.signup_post)
router.get('/login', eventController.login_get)
router.post('/login', eventController.login_post)
router.delete('/login', eventController.login_post)

module.exports = router; 