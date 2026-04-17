


const errorHandler=(err,req,res,next)=>{
    let status= err.statusCode || 500;
    let message= err.message || "Internal server error"
    return res.status(status).json({
        success:false,
        message
    })
}

module.exports={errorHandler};