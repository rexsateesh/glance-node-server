/**
 * Base JSON Reponse
 * @param {string} message 
 * @param {object} data 
 * @param {object} errors 
 * @returns {object}
 */
const response = (message, data, errors) => ({ message, data, errors });

/**
 * Get days difference between two dates
 * @param {Date} firstDate 
 * @param {Date} secondDate 
 * @returns {number}
 */
const getDaysDiff = (firstDate, secondDate) => {
    return Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24));
}

module.exports = {
    response,
    getDaysDiff,
}