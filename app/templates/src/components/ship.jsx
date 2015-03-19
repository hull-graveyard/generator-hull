/**
 * This is where the Ship code actually begins.
 **/

import React     from 'react';
import HullStyle from './hull-style';
import Icons     from './hull-icons';

var Ship = React.createClass({
  propTypes: {
    sandbox: React.PropTypes.bool,
  },
  render: function() {
    return <div>
      <HullStyle {...this.props.settings}/>
      <hr/>
      <p>
        <Icons.Hull {...this.props.settings}/>
      </p>
      <p><a href='https://github.com/hull-ships/hull-ship-boilerplate/archive/master.zip' className='download-link'>
        <Icons.Download {...this.props.settings} style={{marginBottom:5}}/> Download Boilerplate
      </a></p>
    </div>
  },

  statics:{
    // Expose a static entry point to boot the ship
    // You can call it with Ship.start(element,deployment)
    start : function(element, deployment){

      // A bit meta :p
      React.render(<Ship/>, element);
    }
  }
});

module.exports = Ship;


