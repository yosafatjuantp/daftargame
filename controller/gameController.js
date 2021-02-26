const Game = require("../model/Game")

module.exports = {
  index: function(req, res) {
    Game.get(req.con, function(err, rows) {
      res.render("Game/index", { data: rows })
    })
  },

  create: function(req, res) {
    res.render("game/create")
  },

   store: function(req, res) {
    Game.create(req.con, req.body, function(err) {
      res.redirect("/game")
    })
  },
   edit: function(req, res) {
    Game.getById(req.con, req.params.id, function(err, rows) {
      res.render("game/edit", { data: rows[0] })
    })
  },
  update: function(req, res) {
    Game.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/game")
    })
  },
   destroy: function(req, res) {
    Game.destroy(req.con, req.params.id, function(err) {
      res.redirect("/game")
    })
  }
}