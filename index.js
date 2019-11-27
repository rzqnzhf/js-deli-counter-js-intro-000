var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var lineNumber = katzDeliLine.length + 1;
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  if (line.length > 1) {
    var output = 'The line is currently: ';
    for (var i = 0; i <= line.length; i++) {
      var name = line[i];
      var addOutput = `${i + 1}. name, `;
      var x = output.concat(`${name}`);
      return x;
    }

    /*
    var i = 1;
    var indexName = i - 1;
    var baseOutput = `The line is currently: `;
    while (i <= line.length) {
      var modifiedLineOutput = `${i}. ${line[indexName]}, `;
      i++;
    */

  } else {
      return 'The line is currently empty.'
    }
    //return x
}
