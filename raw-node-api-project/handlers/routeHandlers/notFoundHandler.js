/**
 * Title: Not found Handler
 * Description: 404 Not found Handler
 * Author: Bipon Biswas
 * Date: 25/11/2020
 */

 // module scaffolding
 const handler = {}

 handler.notFoundHandler = (requestProperties, callback) => {
     callback(404, {
         message: 'Your requested URL was not found.'
     })
     console.log('Not Found');
 }
 
 module.exports = handler;