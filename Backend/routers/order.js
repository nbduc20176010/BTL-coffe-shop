const router = require("express").Router();
const Order = require("../models/Order");

//create order
router.post("/",  async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    res.json(err);
  }
});

<<<<<<< HEAD
//update product
router.put("/:id",  async (req, res) => {
=======
//update order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.json(err);
  }
});

<<<<<<< HEAD
//delete product
router.delete("/:id",  async (req, res) => {
=======
//delete order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json("Order has been deleted");
  } catch (err) {
    res.json(err);
  }
});

//get all orders
router.get("/", async (req, res) => {
  const page = req.query.page;
  const size = req.query.size;
  try {
    const orders = await Order.find()
      .skip(page * size - size)
      .limit(size);
    res.json(orders);
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;
