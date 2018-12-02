const mongoose = require('mongoose');

//Schemas define the document structure used in the app
const fictionSchema = new mongoose.Schema({image:String, author:String, name:String});
const novelSchema = new mongoose.Schema({image:String, author: String, name: String});
/* Models will contain compiled instances of the schemas
* so they can be used in the app later on
 */
mongoose.model('fictions', fictionSchema, 'fictions');
mongoose.model('novels', novelSchema, 'novels');
