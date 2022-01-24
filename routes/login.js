const express = require('express');
const router = express.Router();
const app = express();
const {
    registerView,
    loginView,
    registerUser,
    loginUser, 
} = require("../controllers/loginController");


const { dashboardView } = require("../controllers/dashboardController");
const { vlaytoView } = require("../controllers/dashboardController");
const { artistView } = require("../controllers/dashboardController");
const { layoutView } = require("../controllers/dashboardController");
const { newView } = require("../controllers/dashboardController");
const { indexView } = require("../controllers/dashboardController");
const { _form_fieldsView } = require("../controllers/dashboardController");


const { protectRoute } = require("../auth/protect");

router.get("/register", registerView);
router.get("/login", loginView);

router.get("/vlayto", protectRoute, vlaytoView);
router.get("/artist", protectRoute, artistView);
router.get("/layout", protectRoute, layoutView);
router.get("/new", protectRoute, newView);
router.get("/index", protectRoute, indexView);
router.get("/_form_fields", protectRoute, _form_fieldsView );

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/new", loginUser);
router.post("/index", loginUser);
router.post("/_form_fields", loginUser);



router.post("/layout", loginUser);
router.post("/upload", loginUser);
//Dashboard
router.get("/dashboard", protectRoute, dashboardView);

module.exports = router;
//---------------------
