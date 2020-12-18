const { check, validationResult } = require('express-validator');

/**
 * Validates added recipe info
 */
exports.validator = [
    check('id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('ID missing')
        .isInt()
        .withMessage('ID must be an integer')
        .escape()
        .bail(),
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Must have name')
        .isString()
        .withMessage('Must be a string')
        .escape()
        .bail(),
    check('content')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Must have content')
        .isString()
        .withMessage('Must be a string')
        .escape()
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    }
];
