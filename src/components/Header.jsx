import { useContext } from 'react';
import { Context } from '../context/ContextProvider'
import { NavLink } from 'react-router-dom';

function Header() {
  const {category} = useContext(Context);

  return (
    <header>
      <h1>Countries App</h1>
      <nav>        
        <ul>
          <li><NavLink to='all'>All Countries</NavLink></li>
          {category.map(itm => {
            return <li key={itm}>
              <NavLink to={`${itm}`}>{itm}</NavLink>
            </li>
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header