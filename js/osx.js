OSX = this.OSX = {};

OSX.funk_wav = T("wav", "./audio/funk.wav", false).load();
OSX.funk = function(){
  T("timeout", _(16), function(){
    OSX.funk_wav.clone().play();
  }).on();
};