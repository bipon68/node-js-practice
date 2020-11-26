/**
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Bipon Biswas
 * Date: 25/11/2020
 */

 // module scaffolding
const handler = {}

handler.sampleHandler = (requestProperties, callback) => {
    console.log('Sample : ', requestProperties);
    callback(200, {
        message: 'This is sample url'
    });
}

module.exports = handler;