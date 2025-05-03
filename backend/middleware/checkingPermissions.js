
import {User} from '../models/user.model.js';


export const authorizeAdminOrSchoolAdmin = async ( req, res, next ) =>
{
    try
    {
        const user = await User.findById( req.userId );
        if ( user.role === 'admin' || user.role === 'school_admin' )
        {
            next();
        }
        else {
            return res.status( 403 ).json( {
                success: false,
                error: 'Access denied. Only admins or school admins can perform this action.',
            } );
        }
    }
    catch ( error )
    {
        next( error );
    }
}
const authorizeAdmin = async ( req, res, next ) =>
{
    try
    {
        const user = await User.findById( req.userId );
        if ( user.role === 'admin')
        {
            next();
        }
        else {
            return res.status( 403 ).json( {
                success: false,
                error: 'Access denied. Only admins or school admins can perform this action.',
            } );
        }
    }
    catch ( error )
    {
        next( error );
    }
}

export default  authorizeAdmin;