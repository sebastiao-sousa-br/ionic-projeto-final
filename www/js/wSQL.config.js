/**
 * db_params = {
 *      name: "my_db_name",
 *      version: "my_db_version",
 *      sub_name: "my_db_sub_name",
 *      size: "my_db_size"
 * }
 *
 * tables_sql = {
 *
 *      "table1"    :   [
 *          "id INTEGER PRIMARY KEY AUTOINCREMENT NULL",
 *          "category_id INTEGER NULL",
 *          "category_name VARCHAR(255) NOT NULL"
 *      ],
 *      "table2"    :   [
 *          "id INTEGER PRIMARY KEY AUTOINCREMENT NULL",
 *          "category_id INTEGER NULL"
 *      ],
 *
 * }
 */
angular.module('wSQL.config', [])
.constant("W_SQL_CONFIG", {
    PARAMS: {
        name: "offline_db",
        version: "1.0",
        sub_name: "sub_name",
        size: 1000000
    },
    TABLES_SQL: {
        "user"    :   [
            "iduser INTEGER PRIMARY KEY NULL",
            "name VARCHAR(255) NOT NULL",
            "date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP"
        ],
        "cursos"    :   [
            "id INTEGER PRIMARY KEY AUTOINCREMENT NULL",
            "nome VARCHAR(255) NOT NULL",
            "periodo VARCHAR(25) NOT NULL"
        ],
        "materias"    :   [
            "id INTEGER PRIMARY KEY AUTOINCREMENT NULL",
            "nome VARCHAR(255) NOT NULL",
            "notas VARCHAR(255) NULL",
            "idcurso INTEGER NOT NULL"
        ],
        "periodos"    :   [
            "id INTEGER PRIMARY KEY AUTOINCREMENT NULL",
            "nome VARCHAR(255) NOT NULL",
            "idmateria INTEGER NOT NULL",
            "nota FLOAT NOT NULL"
        ],
    },
    DEBUG_LEVEL: 2
//    CLEAR: true

});




