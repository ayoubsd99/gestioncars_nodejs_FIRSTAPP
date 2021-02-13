const knex=require('knex')

const conectedknex = knex({
    client: 'sqlite3',
    connection: {
      filename: "cwc.sqlite3"
    }
  });

module.exports=conectedknex