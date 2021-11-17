const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function handleLogin(req, res, next){
    try{
        await User.findOne({userName: req.body.userName}, async( err, user) => {
            if(err){
                console.log(err);
            } else{
                if(user) {
                    const validPass = await bcrypt.compare(req.body.password, user.password);
                    if (!validPass) return res.status(401).send("username or Password is incorrect");
                    
                    // Create and assign token
                    let userInfo = { id: user._id, role: user.role, firstName: user.firstName };
                    const token = jwt.sign(userInfo, process.env['TOKEN_SECRET']);
                    const {password, __v, _id, ...payload} = user._doc;
                    res.status(200).header("auth-token", token).json({
                        status: 'success', 
                        token: token 
                        // payload: payload
                    });
                }else{
                    res.status(401).send('Invalid login')
                }
            }
        })
    }catch(err){
        console.log(err)
    }
}

async function handleRegister(req, res, next){
    

    try{
        
        await User.findOne({userName: req.body.userName}, async (err, data) => {
            if(data){
                return next(new Error("username already exists!"));
            }else{
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(req.body.password, salt);
            
                let user = new User({
                    firstName: req.body.firstName,
                    lastName:  req.body.lastName,
                    email:  req.body.email,
                    userName:  req.body.userName,
                    password:  hashPassword,
                    profileImage: '', 
                    role: req.body.role
                })

            
                await user.save((err, registeredUser) => {
                    if(err){
                        console.log(err);
                    } else {
                        let payload_for_token = { id: registeredUser._id, role: registeredUser.role, firstName: registeredUser.firstName };
                        const token = jwt.sign(payload_for_token, process.env['TOKEN_SECRET']);
                        res.status(200).header("auth-token", token).json({
                            status: 'success', 
                            token: token 
                        });
                    }
                })
            }
        })
        
    }catch(err){
        console.log(err);
    }
    
    
}

module.exports = {
    handleLogin,
    handleRegister
}