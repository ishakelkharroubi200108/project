import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		first_name: {
			type: String,
			required: true,
			trim: true,
		},
		last_name: {
			type: String,
			required: true,
			trim: true,
		},
		phone: {
			type: String,
			trim: true,
			default: '',
			unique: true,
		},
		address: {
			type: String,
			trim: true,
			default: '',
		},
		role: {
			type: String,
			enum: [ 'admin', 'user', 'school_admin' ],
			default: 'user',
		},
		lastLogin: {
			type: Date,
			default: Date.now,
		},
		profilePhoto: {
			type: String,
			default: '',
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		created_at: {
			type: Date,
			default: Date.now,
		},
		updated_at: {
			type: Date,
			default: Date.now,
		},
		resetPasswordToken: String,
		resetPasswordExpiresAt: Date,
		verificationToken: String,
		verificationTokenExpiresAt: Date,
	}
);
userSchema.pre( 'save', function ( next ) 
{
	this.updated_at = new Date();
	next();
} )
export const User = mongoose.model( "User", userSchema );
