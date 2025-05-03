import bcryptjs from "bcryptjs";
import crypto from "crypto";
import dotenv from 'dotenv';

import schoolModel from '../models/school.model.js';
import {User} from '../models/user.model.js';





export const getAllSchool = async ( req, res ) => {
    try
    {
        const schools = await schoolModel.find().select( '-__v' );
        res.status( 200 ).json( {
            success: true,
            message: 'Schools retrieved successfully',
            schools
        } );
    }
    catch ( error )
    {
        res.status( 500 ).json( {
            success: false,
            error: 'An error occured while retrieving schools',
        } );
    }
}

export const getSchoolByName = async ( req, res ) =>
{
    try
    {
        const { name } = req.params;
        const schools = await schoolModel.find( { name: { $regex: new RegExp( name, 'i' ) } } ).select( '-__v' );
        if ( schools.length === 0 )
        {
            res.status( 404 ).json( {
                success: false,
                error: 'No schools found matching provided name',
            } );
        }
        res.status( 200 ).json( {
            success: true,
            message: 'schools retrieved successfully',
            schools,
        } );
    }
    catch ( error )
    {
        res.status( 500 ).json( {
            success: false,
            error: 'An error occured while retrieving schools',
        } );
    }

}


export const addSchoolInfo = async ( req, res ) =>
{
    try
    {
        const {
            name,
            address,
            city,
            postal_code,
            contact_email,
            contact_phone,
        } = req.body;

        if ( !name || !address || !city || !postal_code || !contact_email || !contact_phone )
        {
            return res.status( 400 ).json( {
                success: false,
                error: 'All fields are required',
            } );
        }
        const existingSchool = await schoolModel.findOne( { name } );
        if ( existingSchool )
        {
            return res.status( 409 ).json( {
                success: false,
                error: 'A school with this name already exists.',
            })
        }
        const newSchool = new schoolModel( {
            name,
            address,
            city,
            postal_code,
            contact_email,
            contact_phone,
        } );
        await newSchool.save();

        res.status( 201 ).json( {
            success: true,
            message: 'School created successfully',
        } );
    }
    catch ( error )
    {
        res.status( 500 ).json( {
            success: false,
            error: error.message,
        } );
    }
}


export const addCommision =  async(req , res) => {
    try
    {
        const { commission_rate } = req.body;
        if(!commission_rate) {
            return res.status( 409 ).json( {
                success: false,
                error: "This is field is required",
            } );
        }
        const user = await User.findById( req.userId );

        user.commission_rate = commission_rate;

        await user.save();
        res.status( 200 ).json( {
            success: true,
            message: 'Commission_rate added successfully',
        } );
    }
    catch ( error )
    {
        res.status( 500 ).json( {
            success: false,
            error: error.message,
        } );
    }
}