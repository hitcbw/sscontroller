const process = require("child_process");
exports.getClientList = function (shellResult) {
  let clientList = [];
  var resultJson = generateResultJson(shellResult);
  resultJson.forEach((resultItem) => {
    let ipDock = resultItem.para5;
    if (typeof ipDock !== "undefined") clientIP = ipDock.split(":")[0];
    if (clientList.indexOf(clientIP) === -1) clientList.push(clientIP);
  });
  return clientList;
};

exports.executeCommand = async function (command) {
  //getEncoding();
  return new Promise((resolve, reject) => {
    process.exec(
      command,
      { encoding: "utf-8" },
      function (err, stdout, stderr) {
        if (err) reject(err);
        resolve(stdout);
      }
    );
  });
};

generateResultJson = function (input) {
  var fromArray = input.split("\r\n");
  var resultJson = [];
  fromArray.forEach((substr) => {
    let toStr = "";
    for (i = 0; i < substr.length; i++) {
      if (substr[i] != " ") {
        toStr += substr[i];
      } else {
        if (substr[i + 1] == " ") {
          continue;
        } else {
          toStr += " ";
        }
      }
    }

    let resultItem = toStr.split(" ");
    resultJson.push({
      para1: resultItem[0],
      para2: resultItem[1],
      para3: resultItem[2],
      para4: resultItem[3],
      para5: resultItem[4],
      para6: resultItem[5],
    });
  });
  return resultJson;
};
