import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { createPaysheet, deletepay, getAllpaysheet, updatepaysheet } from "../controllers/pay.controller.js";
import { verfiyinvtmanger } from "../utils/verfiyinvtmanger.js";

const router = express.Router();

router.post('/Pcreate', verifyToken ,verfiyinvtmanger, createPaysheet);
router.get('/getAll',verifyToken ,verfiyinvtmanger, getAllpaysheet);
router.put('/pay/:sheetId',verifyToken ,verfiyinvtmanger,updatepaysheet);
router.delete('/deletepay/:payId',verifyToken ,verfiyinvtmanger,  deletepay)


export default router;