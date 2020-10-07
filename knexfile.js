// Update with your config settings.

module.exports = {
  //configuration for the development enviroment db connection 
  development: {
    client: 'sqlite3', //database driver 
    connection: {
      filename: './data/car-dealer.db3' // which file am i using 
    }, 
    useNullAsDefault: true, // required for SQLite only 
    // migrations: {
    //   directory: './migrations/'
    // }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  //configuration for the production enviroment db connection 
  production: {
    client: 'postgresql',
    connection: {
      host : 'postcarprojectsql://cartheweb.com',
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
