const fs = require("fs");
 
const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";
const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
 
function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}
 
function processData() {
  let maxLength = 0;
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);
 
 
  for (const line of lines) {
    elements = line.split(delimiter);
    if (elements[1].length > maxLength) {
      maxLength = elements[1].length;
    }
  }

  for (let i = 0; i < maxLength; i++) {
    let count = 0;
    for (let line of lines) {
      elements = line.split(delimiter);
      if (elements[1].length === i) {
        count += 1;
      }
    }
    fs.appendFileSync(outputFile, `Chars: ${i},Count: ${count}\n`, "utf-8");
  }
    
  for (let i = 0; i < 26; i++) {
    let count = 0;
    for (let line of lines) {
      elements = line.split(delimiter);
      if (elements[1][0] === alphabetArray[i]) {
        count += 1;
      }    
    }
    fs.appendFileSync(outputFile, `Chars: ${alphabetArray[i]},Count: ${count}\n`, "utf-8");
  
  }

}
 
// Main execution
deleteExistingOutputFile();
processData();
 
