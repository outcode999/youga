import Pay from "../models/Paysheet.model.js";
import { errorHandle } from "../utils/error.js";


//create paysheet
export const createPaysheet = async (req, res, next) => {
  

  const { Id,  name, birth,address,total } = req.body;

  const newPay = new Pay({
    Id,
    name,
    birth,
    address,
    total
    

  });
  try {
    const savedpay = await newPay.save();
    res.status(201).json(savedpay);
  } catch (error) {
    next(error);
  }
};




//get all appoiment
export const getAllpaysheet = async (req, res, next) => {
  try {
    const pay = await Pay.find();

    if (Pay.length > 0) {
      res.json({ message: "Payment details retrieved successfully", pay});
    } else {
      return next(errorHandle(404, " paymentsheet not fonud "));
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};



//delete paysheet
export const deletepay = async (req, res, next) => {

  try {
    await Pay.findByIdAndDelete(req.params.payId);
    res.status(200).json("The sheet has been deleted");
  } catch (error) {
    next(error);
  }
};



//udate paysheeet
export const updatepaysheet = async (req, res, next) => {
 
  try {
    const updatepay = await Pay.findByIdAndUpdate(
      req.params.sheetId,
      {
        $set: {
         
          Id: req.body.Id,
          name: req.body.name,
          birth: req.body.birth,
          address: req.body.address,
          total: req.body.total,
        },
      },
      { new: true }
    );
    res.status(200).json(updatepay);
  } catch (error) {
    next(error);
  }
};


 