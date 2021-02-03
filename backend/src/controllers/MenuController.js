const express = require('express')
const { Menu } = require('../models')

const { getMessage } = require('../helpers/messages')
const { checkJwt } = require('../middlewares/jwt')

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, image, price, size } = req.body

  const addMenu = await Menu.create({
    name,
    image,
    price,
    size,
  })

  return res.jsonOK(addMenu)
})

router.get('/', async (req, res) => {
  const getMenu = await Menu.findAndCountAll({})

  return res.jsonOK(getMenu)
})

router.put('/', checkJwt, async (req, res) => {
  const { body } = req
  const { id } = req.params
  const fields = ['name', 'image', 'price', 'size']

  const getMenu = await Menu.findOne({
    where: { id: id },
  })
  if (!getMenu) return res.jsonNotFound(null)

  fields.map((fieldName) => {
    const newValue = body[fieldName]
    if (newValue) getMenu[fieldName] = newValue
  })

  await getMenu.save()
  return res.jsonOK(getMenu, getMessage('getMenu edited sucessfuly!'))
})

router.delete('/:id', checkJwt, async (req, res) => {
  const { id } = req.params
  try {
    const deleteMenu = await Menu.findByPk(id)

    if (!deleteMenu) {
      return res.jsonBadRequest(null, 'not possible delete Menu, try again.')
    } else {
      await deleteMenu.destroy()

      res.jsonOK(deleteMenu)
    }
  } catch (error) {
    return res.jsonBadRequest(null, error)
  }
})

module.exports = router
