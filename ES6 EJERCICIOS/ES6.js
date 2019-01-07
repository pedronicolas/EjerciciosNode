var inputs = process.argv.slice(2);

var result = inputs.map(element => element[0]).reduce((valoranterior,valoractual)=>{
    return valoranterior+valoractual;
},'');
console.log(`[${inputs}] becomes "${result}"`);