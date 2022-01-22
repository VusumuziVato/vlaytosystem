//For Register Page
const dashboardView = (req, res) => {
    res.render("dashboard", {
      user: req.user
    });
  };
 
//Producer Page
  const vlaytoView = (req, res) => {
    res.render("vlayto", {
      user: req.user
    });
  };
  
   //ArtistPage
  const artistView = (req, res) => {
    res.render("artist", {
      user: req.user
    });
  };

  module.exports = {
    dashboardView,vlaytoView,artistView,
  };