var Eval = require("../models/evaluation");

// const get = (req, res) => {
//   return Eval.find({ complete: false }).then(tasks => res.json(tasks));
//   // .catch(error => res.json(errorMessage()));
// };

const submit = (req, res) => {
  var newEval = new Eval(req.body);
  newEval
    .save()
    .then(newThing =>
      res.json({ message: "successfully submitted evaluation" })
    )
    .catch(error => {
      return res.json({ message: "error" });
    });
};

module.exports = { submit };
