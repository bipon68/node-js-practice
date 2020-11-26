/**
 * Title: Routes
 * Description: Application Routes
 * Author: Bipon Biswas
 * Date: 25/11/2020
 */


 // dependencies
 const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')
 const routes = {
     'sample': sampleHandler
 }

 module.exports = routes;