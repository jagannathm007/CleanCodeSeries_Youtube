
exports.success = (message, result, res) => {
    return res.json({ message, result })
}

exports.error = (err, res) => {
    return res.status(500).json({
        message: err.message,
        result: 0
    });
}