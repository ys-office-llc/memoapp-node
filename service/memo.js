const model = require("../model");

exports.getAll = async () => {
  try {
    const memos = (await model.memo.find({})) || [];
    return memos;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
