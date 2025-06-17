module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // (або конкретно твій домен)
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
