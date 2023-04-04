
const mhchem = require('mhchemparser');
var texvcjs = require('mathoid-texvcjs');


mhchemParser = mhchem.mhchemParser

function printDashes(){
    console.log("------------");
}
function checkWithTexVCJS( input, options){
    var result = texvcjs.check(input, options);
    console.log("check\t:" +  result.status);
    console.log("chest\t" + result.output || ''); // cleaned/validated output
}

function parseAndLogInput( input, type){
    console.log("Inpt:\t" + input);
    console.log("Type:\t" + type);
    let res = mhchemParser.toTex(input, type);
    console.log("Res1:\t" + res );
    let res2 = mhchemParser.toTex(res, type);
    console.log("Res2:\t" + res2);

    return res;
}

let texvcopt = {
    "usemhchem": true,
    "oldmhchem": true
}

let input = '$K = \\frac{[\\ce{Hg^2+}][\\ce{Hg}]}{[\\ce{Hg2^2+}]}$';
res1 = parseAndLogInput(input, "ce");
checkWithTexVCJS(res1,texvcopt);
printDashes();
res2 = parseAndLogInput(input, "tex");
checkWithTexVCJS(res2, texvcopt);
printDashes();
checkWithTexVCJS( "$K = \\frac{[{\\mathrm{Hg}{\\vphantom{A}}^{2+}}][{\\mathrm{Hg}}]}{[{\\mathrm{Hg}{\\vphantom{A}}_{}{\\vphantom{A}}^{2+}}]}$", texvcopt);
printDashes();
checkWithTexVCJS('{\\ce {H2O}}', texvcopt);



