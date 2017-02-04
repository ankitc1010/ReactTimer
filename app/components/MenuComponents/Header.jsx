import React from 'react';

let Header = (props) => {
  let title = props.title;
  return (
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">

            <span className="mdl-layout-title"><strong>{title}</strong></span>

            <div className="mdl-layout-spacer"></div>

          
        </div>
    </header>
  )
}
export default Header;
