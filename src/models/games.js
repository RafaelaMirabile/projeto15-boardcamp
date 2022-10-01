import joi from 'joi'

const gameSchema = joi.object({
    name: joi.string().required().trim(),
    image: joi.string().required(),
    stockTotal: joi.number().greater(0).required(),
    categoryId: joi.number().required(),
    pricePerDay: joi.number().greater(0).required()
});

export default gameSchema;