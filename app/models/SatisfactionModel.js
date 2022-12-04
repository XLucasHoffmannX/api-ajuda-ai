import mongoose from 'mongoose';

const satisfactionSchema = new mongoose.Schema({
    client_id: {
        type: String, 
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Satisfaction = mongoose.model("Satisfaction", satisfactionSchema);

export default Satisfaction;