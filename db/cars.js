const knex=require('./knex')

function CreateCar(car){
    return knex('cars').insert(car)
}



function getAllCars(){
    return knex('cars').select('*')
}



function DeleteCar(id){
    return knex('cars').where("id",id).del()
}




function UpdateCar(id,car){
    return knex('cars').where("id",id).update(car)
}


module.exports={
    getAllCars,
    CreateCar,
    DeleteCar,
    UpdateCar
}