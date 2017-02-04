import React from 'react';
import HeaderLink from 'HeaderLink';

let Drawer = (props) => (
  <div className="mdl-layout__drawer">
      <span className="mdl-layout-title"><strong>{props.title}</strong></span>
      <nav className="mdl-navigation">
          <HeaderLink link="/#/" linkName="HOME" />
          <HeaderLink link="/#/stopwatch" linkName="STOP WATCH" />
          <HeaderLink link="/#/countdown" linkName="COUNTDOWN" />

      </nav>
  </div>
)

export default Drawer;
