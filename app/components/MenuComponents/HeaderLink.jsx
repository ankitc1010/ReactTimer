import React from 'react';

let HeaderLink = (props) => {
  let {link, linkName} = props;
  return (
    <a className="mdl-navigation__link" href={link}>{linkName}</a>
  )
}
export default HeaderLink;
