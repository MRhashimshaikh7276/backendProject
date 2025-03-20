const isloggedIn= (res,res, next)=>{

    if (!req.session.recruiter) {
        return res.redirect('/recruiter/login')
    };
    next();
}

export default isloggedIn;
