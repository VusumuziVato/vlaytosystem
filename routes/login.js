const express = require('express');
const router = express.Router();
const {
    registerView,
    loginView,
    registerUser,
    loginUser, 
} = require("../controllers/loginController");
const { dashboardView } = require("../controllers/dashboardController");
const { vlaytoView } = require("../controllers/dashboardController");
const { artistView } = require("../controllers/dashboardController");

const { protectRoute } = require("../auth/protect");


router.get("/register", registerView);
router.get("/login", loginView);

router.get("/vlayto", protectRoute, vlaytoView);
router.get("/artist", protectRoute, artistView);

router.post("/register", registerUser);
router.post("/login", loginUser);


//Dashboard
router.get("/dashboard", protectRoute, dashboardView);


module.exports = router;