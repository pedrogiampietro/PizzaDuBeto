const express = require('express');
const { Menu } = require('../models');

const { getMessage } = require('../helpers/messages');
const { checkJwt } = require('../middlewares/jwt');

const { uploadMenuPictures } = require('../middlewares/multer');

const router = express.Router();

router.post('/', uploadMenuPictures.single('image'), async (req, res) => {
  const { name, price, size, type, category } = req.body;
  const finalFileName = req.file;

  const removeDollar = price.slice(3, price.length).replace(',', '.');

  console.log(req.body);

  // const addMenu = await Menu.create({
  //   name,
  //   image: `uploads/menu-pictures/${finalFileName.filename}`,
  //   price: Number(removeDollar).toFixed(2),
  //   size,
  //   type,
  //   category,
  // });

  // return res.jsonOK(addMenu);
});

router.get('/', async (req, res) => {
  const getMenu = await Menu.findAndCountAll({});

  return res.jsonOK(getMenu);
});

router.put('/', checkJwt, async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const fields = ['name', 'image', 'price', 'size'];

  const getMenu = await Menu.findOne({
    where: { id: id },
  });
  if (!getMenu) return res.jsonNotFound(null);

  fields.map((fieldName) => {
    const newValue = body[fieldName];
    if (newValue) getMenu[fieldName] = newValue;
  });

  await getMenu.save();
  return res.jsonOK(getMenu, getMessage('getMenu edited sucessfuly!'));
});

router.delete('/:id', checkJwt, async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMenu = await Menu.findByPk(id);

    if (!deleteMenu) {
      return res.jsonBadRequest(null, 'not possible delete Menu, try again.');
    } else {
      await deleteMenu.destroy();

      res.jsonOK(deleteMenu);
    }
  } catch (error) {
    return res.jsonBadRequest(null, error);
  }
});

module.exports = router;
