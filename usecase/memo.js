const service = require("../service");

exports.getAll = async () => {
  try {
    const memos = await service.memo.getAll();
    return memos;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.create = async (message, checked) => {
  try {
    await service.memo.create(message, checked);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.update = async (id, checked) => {
  try {
    await service.memo.update(id, checked);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
