'use strict'

var FieldError = require('../../errors').FieldError


/**
 * Selector filter
 *
 * @see http://druid.io/docs/0.10.0/Filters.html
 *
 * @param {string} dimension Dimension to which filter is applied
 * @param {array}|..string  Values to match
 */
module.exports = function(dimension, values) {
    if (!dimension || typeof values === 'undefined') {
        throw new FieldError('Dimension or value is not specified')
    }
    if (!Array.isArray(values)){
        throw new FieldError('Can only accept type array for values')
    }
    // convert to empty string, null/empty string are the same thing to druid
    if (values === null) {
        values = ''
    }

    this.dimension = dimension
    this.values = values
}
