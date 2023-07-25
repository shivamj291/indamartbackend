const modalssellerdata = require("../Modals/ModalsSeller")
async function addData(data){
    const mart = await modalssellerdata.create({
        ...data
    })
    return mart;
}

module.exports = {
    addData
}