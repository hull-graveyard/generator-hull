import React      from 'react';
import Color      from 'color';

// Yes. You can do this with Webpack.
import MainStyles from '../styles/main.scss';

//// Now you can embed CSS like this.
//// Gives you reference-counted files;

//// To remove the style: 
// MainStyles.unuse();

/**
 * Style component
 * @param  {hash} settings
 * @return {React Component} A style tag
 */
var HullStyle = React.createClass({
  componentDidMount: function() {
    MainStyles.use();
  },
  componentWillUnmount: function() {
    MainStyles.unuse();
  },
  getStyle: function(){

    // Just Javascript™
    var props = this.props
    var left_color='#0093e6';
    var right_color='#4bc2b8';
    // Here's where you inject your user-configurable CSS.
    // ES6 template literals (http://updates.html5rocks.com/2015/01/ES6-Template-Strings) make this a fun moment.
    var style = `
      body {
        color: ${Color(props.text_color).clearer(.4).hslString()};
        background-image: url(${props.background_image});
      }
      hr{
        height: 10px;
        border:0;
        background-image: linear-gradient(to right, ${left_color} 0%,  ${right_color} 100%);
        padding: 0 0 0 0;
        margin:16px 0;
      }
      #ship{
        width: 80%;
        margin:50px auto;
        padding-bottom: 10px;
        min-width: 300px;
        box-shadow: 0 0 10px rgba(0,0,0,.05);
        -webkit-box-shadow: 0 0 10px rgba(0,0,0,.05);
      }
      .svg-share-icon{
        width:64px;
        margin:0 auto;
        display:block;
      }
      .svg-icon-hull{
        opacity: .1;
        width: 128px;
        margin:30px auto 0;
        display:block;
      }
    `
    return style
  },
  render: function() {
    // Insert any css you want here. Live updates FTW
    return <style type="text/css">{this.getStyle()}</style>;
  }

});

module.exports = HullStyle;

