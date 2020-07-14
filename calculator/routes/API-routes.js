const router = require("express").Router;

const controller = require("../controllers/calcController.js");

router.route("/all").get(controller.getAll);

router.route("/limit").get(controller.limit);

router.route("/save").post(controller.save);

// export the router
module.exports = router;
