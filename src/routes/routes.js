const expres=require('express');
const router=expres.Router();
const whatsappController=require('../controllers/whatsappControllers');

router.get('/send', whatsappController.Verifytoken).post('/send', whatsappController.RecievedMessage);

module.exports=router;