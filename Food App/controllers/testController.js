const testUserController = (req,res)=>{
    try{
        res.status(200).send({
            success:true,
            message:"test controller working properly"
        }

        )
    }
    catch(err){
        
        return res.status(500).json({
            error:err.message,
            success:false,
            message:"test controller error"
        }
        )
    }
}

module.exports = {testUserController};