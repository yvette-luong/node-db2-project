//record changes to the database 
//the up() func describes the changes to apply to the database when the migration runs

exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl =>{
        // a primary key, called 'id, integer, autoincrementing
        tbl.increments();
        //VIN is composed of 17 characters (digits and capital letters) in car 
        tbl.string("vin", 17).notNullable();
        //make (string)
        tbl.string("make").notNullable();
        //model (string)
        tbl.string("model").notNullable();
        //mileage in car :the aggregate number of miles traveled over in a given time. length, extent, or distance in miles (number) 
        tbl.float("mileage", 9).notNullable();  
    })
};
// remeber to return ! 

// the down() function describes how to undo the changes 
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
