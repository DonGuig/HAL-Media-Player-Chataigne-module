function init() {
  script.log("Custom module init");
}

function moduleParameterChanged(param) {
  script.log(param.name + " parameter changed");

  if (param.isParameter()) {
  }
}

function moduleValueChanged(value) {
  script.log(value.name + " value changed");

  if (!value.isParameter()) {
    // if it is a trigger
    if (value.name === "play") play();
    else if (value.name === "pause") pause();
    else if (value.name === "stop") stop();
    else if (value.name === "restart") restart();
    else if (value.name === "reboot") reboot();
    else if (value.name === "shutdown") shutdown();
  }
}

function sendToHALMP(address,arg) {
  script.log("sending message : " + address + " " + (arg ? arg: ""));
  local.send(address,arg);
}

// Here are the callback functions for the commands

function play() {
  sendToHALMP("/play");
}

function pause() {
  sendToHALMP("/pause");
}

function stop() {
  sendToHALMP("/stop");
}

function restart() {
  sendToHALMP("/restart");
}

function reboot() {
  sendToHALMP("/reboot");
}

function shutdown() {
  sendToHALMP("/shutdown");
}

