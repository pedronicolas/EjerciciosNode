function getShortMessages(messages) {
       let result = [];
       result= messages.filter(function (elemento){
              return elemento.message.length < 50;
       }).map(function (elemento){
              return elemento.message;
       })
       return result;
}

module.exports = getShortMessages;