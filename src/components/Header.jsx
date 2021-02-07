import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import '../assets/styles/components/Header.scss'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import Logo from '../assets/static/rickyMortyLogo.png'
import userIcon from '../assets/static/user-icon.png'
import PropTypes from 'prop-types'

const Header = props =>{
  
  const { user, isLogin, isRegister } = props
  const { email, name } = user;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister
  })

  return(
    <header className={headerClass}>
    <Link to='/'>
      <img className="header__img" src={Logo} alt="Platzi Video"/>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {hasUser ?
          <img src={gravatar(email)} alt={email}/>:
          <img src={userIcon} alt=""/>
        }
        <p>Perfil</p>
      </div>
      <ul>
        {hasUser ?
          <li><Link to="/">{name}</Link></li>
          : null
        }

        {hasUser ?
          <li><Link to="#" onClick={handleLogout}>Cerrar Session</Link></li>:
          <li><Link to="/login">Iniciar Sesion</Link></li>
        }
      </ul>
    </div>
  </header>
);}

Header.propTypes = {
  user: PropTypes.object,
  hasUser: PropTypes.bool,
  Logo: PropTypes.string,
  userIcon: PropTypes.element,
  name: PropTypes.string,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)