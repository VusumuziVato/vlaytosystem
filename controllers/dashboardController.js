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
  
   //StreamDownloadPage
  const artistView = (req, res) => {
    res.render("artist", {
      user: req.user
    });
  };

   //StreamDownloadPage
   const audioView = (req, res) => {
    res.render("audios", {
      user: req.user
    });
  };
   //StreamDownloadPage
   const newView = (req, res) => {
    res.render("new", {
      user: req.user
    });
  };
   //StreamDownloadPage
   const layoutView = (req, res) => {
    res.render("layout", {
      user: req.user
    });
  };
 //StreamDownloadPage
 const indexView = (req, res) => {
  res.render("index", {
    user: req.user
  });
};

 //StreamDownloadPage
 const _form_fieldsView = (req, res) => {
  res.render("_form_fields", {
    user: req.user
  });
};


  module.exports = {
    dashboardView,vlaytoView,artistView,audioView,newView,layoutView,indexView,_form_fieldsView,
  };