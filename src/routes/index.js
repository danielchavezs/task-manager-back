const { Router } = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = Router();

router.use(morgan("dev"));
router.use(cors());


module.exports = router;