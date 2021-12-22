import {NavLink} from 'react-router-dom';

function Header(){
  const activeStyle = {color: "aqua"}
  return (
    <header>
        <h1>
          <NavLink exact to="/" activeStyle={activeStyle}>DCODELAB</NavLink>
        </h1>
        
        <ul id="gnb">
          <li><NavLink exact to="/department" activeStyle={activeStyle}>Department</NavLink></li>
          <li><NavLink exact to="/flickr" activeStyle={activeStyle}>Flickr</NavLink></li>
          <li><NavLink exact to="/youtube" activeStyle={activeStyle}>Youtube</NavLink></li>
          <li><NavLink exact to="/board" activeStyle={activeStyle}>Board</NavLink></li>
        </ul>       
      </header>
  )
}
export default Header;