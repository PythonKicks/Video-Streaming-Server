exports.helloWorld = function(req, res, next) {
    res.status(200).json({
        message: 'Hello, World 2.0!'
    });
}