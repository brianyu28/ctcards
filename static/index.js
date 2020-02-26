const codeReader = new ZXing.BrowserQRCodeReader();
let chosenDeviceId = null;
let puzzleId = null;
let cards = [];

function getQRContent(video_id, callback) {
  codeReader.listVideoInputDevices().then(devices => {
    const deviceId = devices[0].deviceId;
    codeReader.decodeFromInputVideoDeviceContinuously(deviceId, video_id, (result, err) => {
      if (result) {
        console.log('QR Content: ' + result.text)
        // codeReader.reset();
        callback(result.text);
      } else if (err) {
        // error
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getQRContent("video", cb);
});

function cb(text) {
  console.log("Callback");
  console.log(text);
}