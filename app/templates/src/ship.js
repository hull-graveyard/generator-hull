import App from './app';

// This is the entry point for the Ship when it's used as an HTML Import.
// It's standalone and boots when Hull exists and calls onEmbed

if (Hull){

  // This is called when the ship has been embedded in the page.
  Hull.onEmbed(document, App.start);

  // Automatically resize the frame to match the Ship Content
  // Call the method once to know if we're in a sandbox or not
  if(Hull.setShipSize()){
    setInterval(function(){
      var height = document.getElementById('ship').offsetHeight
      Hull.setShipSize({height:height});
    } , 500)
  }
}

module.exports=App
