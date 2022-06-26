exports.getAll = (req, res, next) => {
  console.log(req, next);
  const memos = [
    {
      _id: "617c9c32c5c70e85e21668a1",
      message: "顔洗う",
      checked: false,
    },
    {
      _id: "617c9c38c5c70e85e21668a4",
      message: "歯磨きする",
      checked: false,
    },
    {
      _id: "617c9c48c5c70e85e21668a7",
      message: "朝ごはんを食べる",
      checked: true,
    },
  ];
  return res.status(200).send({ memos: memos });
};
