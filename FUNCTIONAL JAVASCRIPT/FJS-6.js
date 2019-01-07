function countWords(inputWords) {
    
    return inputWords.reduce((obj,el) =>{
      obj[el] = ++obj[el] || 1
      return obj;
    }, {})
  }

  module.exports = countWords