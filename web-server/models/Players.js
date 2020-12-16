const connection = require("../config");

const save = async (data) => {
  let sql = "INSERT INTO players SET ?";
  try {
    let [results, fields] = await connection
      .promise()
      .query(sql, [{ ...data }]);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const findById = async (id) => {
  let sql = "SELECT * FROM players WHERE id = ?";
  try {
    let [results, fields] = await connection.promise().query(sql, { id });
    return results[0];
  } catch (error) {
    throw new Error(error);
  }
};

const findAll = async () => {
  let sql = "SELECT * FROM players";
  try {
    let [results, fields] = await connection.promise().query(sql);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const updateById = async (id, data) => {
  let sql = `UPDATE players SET ? WHERE ?`;
  try {
    let [results, fields] = await connection
      .promise()
      .query(sql, [{ ...data }, { id }]);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

// WHERE ID = ?  ----> [id]  // WHERE ? ----> { id }

const deleteById = async (id) => {
  let sql = `DELETE FROM players WHERE ID =?`;
  try {
    let [results, fields] = await connection.promise().query(sql, [id]);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  save,
  findById,
  findAll,
  updateById,
  deleteById,
};
