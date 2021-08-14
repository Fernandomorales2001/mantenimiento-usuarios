//Esta informacion debe estar recorda y actualizada en api_catalogo.config

const config = {
    app: {
        port: "3200",
        host: "0.0.0.0",
        // host: "192.168.2.226",
        // host: "localhost",
        api_key: "LkFsbGFzMjAxM2NzdG0=",
        secret: 'LkFsbGFzMjAxM0NTVE0me0Nvbm5lY3Rvcn0=',
        token_login: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJkYl9jb25maWciOnsidXNlciI6InVzZXJfdmFsaWRhdG9yIiwiY2xhdmUiOiJ1c2VyX3ZhbGlkYXRvciJ9fQ.ERoNLPKjSg2FlnHro5GalskYP2-wvEH4lHMQyph5RMNuOsQ3uZWIboIsPG2kM9OC",
        backup: false
    },
    // db: {
    //     // host: '192.168.1.248',
    //     host: '192.168.1.253',
    //     port: "5432",
    //     // database: 'allasdb3',
    //     database: 'allasdb',
    //     user: "user_validator",
    //     password: "user_validator",
    //     client_encoding: 'utf8'
    // },
    db: {
        // host: '192.168.1.248',
        host: '192.168.1.248',
        port: "5432",
        // database: 'allasdb3',
        database: 'db_pruebas01',
        user: "user_validator",
        password: "user_validator",
        client_encoding: 'utf8'
    },
    dbMySql: {
        host: '192.168.3.20',
        user: 'dashboard',
        password: 'allas2019',
        database: 'call_center'
    }
};

module.exports = config;