const codeReader = new ZXing.BrowserQRCodeReader();

let chosenDeviceId = null;

function getQRContent(video_id, callback) {
  codeReader.listVideoInputDevices().then(devices => {
    const deviceId = devices[0].deviceId;
    codeReader.decodeFromInputVideoDevice(deviceId, video_id)
              .then(result => {
                console.log('QR Content: ' + result.text)
                codeReader.reset();   
                callback(result.text);
              })
              .catch(err => console.error(err));
    });
}

document.addEventListener('DOMContentLoaded', () => {
  getQRContent('video2', cb);
});

function cb(text) {
  console.log("Callback");
  console.log(text);
}