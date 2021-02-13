const knex=require('knex')

const conectedknex = knex({
    client: 'sqlite3',
    connection: {
      filename: "cwc.sqlite3"
    },
    useNullAsDefault: true
  });

module.exports=conectedknex