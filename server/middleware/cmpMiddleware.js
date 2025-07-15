const requireCmp = (req, res, next) => {
    try {
        const companyId = req.headers['Company_id'];
        if(companyId){
            
            next();

        }else{
            res.status(402).send({
                success: false,
                message: 'Company not Selected'
            })
        }
         
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.requireCmp = requireCmp;