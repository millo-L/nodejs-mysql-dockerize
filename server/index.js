const mysql = require("mysql2/promise");

const dbConnect = async () => {
    try {
        const connection = await mysql.createConnection({
            host: "db",
            user: "root",
            password: "root",
            database: "sampleDB",
        });

        console.log("mysql connection success");
    } catch (error) {
        console.log(error);
    }
};

dbConnect();
