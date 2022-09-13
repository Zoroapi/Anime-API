const pchecker = (req, res, next) => {
    var getparams = req.query;
    console.log(getparams);
    if (!getparams.name) {
        return res.json({
            status: "error",
            message: "No query provided"
        });
    }
    next();
}

module.exports = { pchecker };