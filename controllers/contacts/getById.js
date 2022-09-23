const {Contact} = require("../../models");

const getById = async(req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    // console.log("result: ", result);
    if (!result) {
         const error = new Error("Not found");
            error.status = 404;
            res.status(404).json({
            message: `Product with id=${contactId} not found`
        });
        return;
    };
        res.json({
        status: "success",
        code: 200,
        data: result
    })
};

module.exports = getById;

