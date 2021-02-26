module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM daftar_game", callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM daftar_game WHERE id_game = ${id}`, callback)
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO daftar_game SET 
      name = '${data.name}', 
      date_release = '${data.date_release}',
      developer = '${data.developer}',
      game_type = '${data.game_type}'`,
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE daftar_game SET 
      name = '${data.name}',
      date_release = '${data.date_release}',
      developer = '${data.developer}',
      game_type = '${data.game_type}'
      WHERE id_game = ${id}`,
      callback
    )
  },
  destroy: function(con, id, callback) {
    con.query(`DELETE FROM daftar_game WHERE id_game = ${id}`, callback)
  }
}