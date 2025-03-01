import mongoose from 'mongoose';


const SheetSchema = new mongoose.Schema({
  Id: {
        type: String,
        required: true
      },
  name: {
    type: String,
    required: true
  },
  birth: {
    type: String, 
    required: true
  },
  address: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
 
}

);


const Sheet = mongoose.model('Sheet', SheetSchema);

export default  Sheet;
