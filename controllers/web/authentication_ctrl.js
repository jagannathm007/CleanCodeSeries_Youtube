let responseUtil = require('./../../utils/response_util');

exports.signIn = async (req, res) => {
    try {
        let request = req.body;
        return responseUtil.success("Response found!", request, res);
    } catch (err) {
        return responseUtil.error(err, res);
    }
}

exports.signUp = async (req, res) => {

}