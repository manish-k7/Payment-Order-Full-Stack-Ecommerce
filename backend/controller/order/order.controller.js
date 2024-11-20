const orderModel = require("../../models/orderProductModel")

const orderController = (request,response) =>{

    try{
const currentUserId = request.userId
const orderList = await orderModel.find({userId:currentUserId})

response.json({
    data: orderList,
    message : "Order list",
    success : true
})

    }catch(error){
        response.status(500).json({
            message:error.message || error,
            error:true
        })
    }


}

module.exports = orderController