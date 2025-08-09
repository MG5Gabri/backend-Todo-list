const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bjjsxqocquhjtd9xxeiv-mysql.services.clever-cloud.com',
  user: 'ucwotfljm51l7xow',
  password: 'geMXD01iKLsx5CRMrLfq',
  database: 'bjjsxqocquhjtd9xxeiv',
});

module.exports = pool.promise();