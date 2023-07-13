/**
 * @typedef {Object} vehicleMedia
 * @property {string} name - Name of image
 * @property {string} url - URL of image
 */

/**
 * @typedef {Object} vehicleEmissions
 * @property {string} template - Name of image
 * @property {number} value - URL of image
 */

/**
 * @typedef {Object} vehicleSummaryPayload
 * @property {string} id - ID of the vehicle
 * @property {string} apiUrl - API URL for price, description & other details
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {Array.<vehicleMedia>} media - Array of vehicle images
 * @property {Array.<vehicleMetaPayload>} information - Array of vehicle meta
 */

/**
 * @typedef {Object} vehicleMetaPayload
 * @property {vehicleEmissions} emissions - Array of vehicle emissions
 * @property {string} passengers - Passengers
 * @property {Array.string} drivetrain - Array of vehicle drive train
 * @property {Array.string} bodystyles - Array of vehicle body styles
 */
