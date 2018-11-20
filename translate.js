const keys = require("./keys.js");
const request = require("request");

var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

var langTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    iam_apikey: 'Eeoyrl35VHmQe7vBsc99nGsXYZdlMtvgf5pQ_gQ3-cc4',
    url: 'https://gateway.watsonplatform.net/language-translator/api'
  });
  
  var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var langTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  iam_apikey: 'Eeoyrl35VHmQe7vBsc99nGsXYZdlMtvgf5pQ_gQ3-cc4'
});

var translate = {
  //Put whatever word you want to Translate
  text: 'Computer Networking',
  model_id: 'en-es'
};

langTranslator.translate(
  translate,
  function(error, response) {
    if (error)
      console.log(error)
    else
      console.log(JSON.stringify(response, null, 2));
  }
);
