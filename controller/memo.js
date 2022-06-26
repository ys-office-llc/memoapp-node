const usecase = require("../usecase");

exports.getAll = async (req, res, next) => {
  console.log(req, next);
  try {
    const memos = await usecase.memo.getAll();
    return res.status(200).send({ memos: memos });
  } catch (e) {
    return res.status(500).send({ error: String(e), message: "error occured" });
  }
};

exports.create = async (req, res, next) => {
  console.log(req, next);
  const message = req.body.message ?? "";
  const checked = req.body.checked ?? false;

  try {
    await usecase.memo.create(message, checked);
    return res.status(200).send({});
  } catch (e) {
    return res.status(500).send({ error: String(e), message: "error occured" });
  }
};
