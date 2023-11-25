const jwt=require("jsonwebtoken");
const userModel=require("../Model/user.model")

function verifyToken(req,res,next){
if( req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ",)[0]==="JWT"){
        jwt.verify(req.headers.authorization.split(" ")[1],
                   "secretkeyfsd38",
                   function(error,verifiedtoken){
                    if(error) return res.status(401).send("invalid jwt token");
                    else{
                        userModel.findById(verifiedtoken._id).then((data)=>{
                            req.user=data;
                            next();
                        }).catch((error)=>{
                            return res.status(500).send("server not available");
                        })
                    }
                   })     
    }
else {
    return res.status(403).send("JWT token are not present");
}
}

module.exports=verifyToken;