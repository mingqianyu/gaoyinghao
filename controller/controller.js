


module.exports = function (app) {
    app.get('todo',function (req,res) {
        res.send(req.url);
    })
};












