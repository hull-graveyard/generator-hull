import App from './app';

var appInit = function(hull, me, platform, org){
  // When developing on localhost, skip the embed process and start the ship directly
  // App.start(document.getElementById('ship'),platform.deployments[0]);

  // When embedded by Hull. this is how the app will be booted automatically.
  // You don't have to call this yourself. Hull will do it for you
  // hull.embed(platform.deployments)
}

Hull.ready(appInit)

