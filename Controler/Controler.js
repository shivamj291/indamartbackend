const modalsdata = require("../Modals/Modals")
async function addData(data){
    const mart = await modalsdata.create(data)
    return mart;
}

async function getData({
    catagory
}){
let mart
const {q,city} = catagory;
const {category , Seller_type} = catagory;
const { cat , Color} = catagory;
const {id} = catagory
console.log(id)



if(city && q){
    mart = await modalsdata.find({catagory:q,city:city})
  
}else if(category && Seller_type){
    mart = await modalsdata.find({catagory:category,Seller_type:Seller_type})
}else if(cat && Color){
    mart = await modalsdata.find({catagory:cat,Color:Color})
}else if(Color){
    mart = await modalsdata.find({Color:Color})
}
else if(city){
    mart = await modalsdata.find({ city });
}else if(Seller_type){
    mart = await modalsdata.find({Seller_type});
}else if(q){
    mart = await modalsdata.find({ catagory:q });
}
else if(id){
    mart = await modalsdata.find({id});
}
else{
    mart = await modalsdata.find({});
}

   return mart;
}

async function deleteById(id){
    const restaurant= await modalsdata.deleteOne({_id:id});
    return restaurant;
}
    


module.exports = {
    addData,
    getData,
    deleteById
}