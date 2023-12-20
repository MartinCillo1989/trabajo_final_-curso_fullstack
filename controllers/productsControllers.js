const Product = require('../models/productsModels')


exports.getProductDetails = async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
  
      // Renderiza la vista de detalles del producto (puedes ajustar esto según tu configuración)
      res.render('http://localhost:3000/productDetails', { product });
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };



const create = async (req,res)=>{
    try{
        await Product.create({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        description:req.body.description,
    })

    res.status(201).end()

    }catch(error){
        res.status(500).end()
    }

    

}

const update = async (req,res)=>{
    try{
        await Product.findByIdAndUpdate(req.body.productId,req.body)
        res.status(200).end()
    }catch(error){
        res.status(500).end()
    }
    
}

const remove = async (req,res)=>{
    try{
        await Product.deleteOne({_id:req.body.productId})
        res.status(200).end()
    }catch(error){
        res.status(500).end()
    }
}

const get = async (req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(error){
        res.status(500).end()
    }

}

module.exports={
    create:create,
    update:update,
    remove:remove,
    get:get,
}