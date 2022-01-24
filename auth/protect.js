//js
const protectRoute = (req, res, next) =>{
    if (req.isAuthenticated()) {
      return next();
    }
    console.log('Please log in to continue');
    res.redirect('/login');
  }
  const allowIf = (req, res, next) =>{
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');
    res.redirect('/producer'); 
    res.redirect('/artist');  
    res.redirect('/new'); 
    res.redirect('/layout'); 
    res.redirect('/index');
    res.redirect('/_form_fields');   
  }
  module.exports = {
      protectRoute,
      allowIf,
    };