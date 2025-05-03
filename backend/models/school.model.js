import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim:true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        postal_code: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            trim: true,
            default: 'Morocco',
        },
        contact_email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        contact_phone: {
            type: String,
            required: true,
            trim: true,
        },
        commission_rate: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        updated_at: {
            type: Date,
            default: Date.now,
        }
} );

schoolSchema.pre( 'save', function ( next )
{
    this.updated_at = new Date();
    next();
})


const schoolModel = mongoose.model( "School", schoolSchema );

export default schoolModel;