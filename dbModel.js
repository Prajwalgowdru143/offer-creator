import mongoose from "mongoose";


const tiktokSchema=mongoose.Schema({
    Discount: String,
    Maximumdiscount: String,
    OfferCode: String,
    OfferDescription: String,
    OfferTitle: String,
    Usagepercustomer: String,
    expirydate: String,
    minordervalue: String,
    startdate: String,
    totalcustomers: String,
});

export default mongoose.model('createOffer', tiktokSchema);