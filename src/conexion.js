import sql from 'mssql'
const dbsettings  = {
    user:"tnt-admin",
    password:"papas123.",
    server:"servidor-tnt.database.windows.net",
    database:'pokepoke',
    options: {
        trustedConnection: true,
        encrypt: true,
        trustServerCertificate: true,        
      }
}

export const getconnection = async () =>{
    try {
      const pool = await sql.connect(dbsettings);  
      return pool;
    } catch (error) {
      console.log(error.message);
    }
  }
export {sql}