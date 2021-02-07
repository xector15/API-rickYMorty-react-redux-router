import React from 'react';
import { connect } from 'react-redux'
import { getSearch } from '../actions'
import classNames from 'classnames'
import '../assets/styles/components/Search.scss'
import PropTypes from 'prop-types'

const Search = props => {

    const { getSearch, isHome } = props

    const handleChange = (e) => {
        getSearch(e.target.value)
    }

    const inputStyle = classNames('input',{
        isHome
    })

    return (
        <section className='main'>
            <h2 className="main__title">¿Qué personaje quieres ver hoy?</h2>
            <input
                type="text"
                className={inputStyle}
                placeholder="Buscar..."
                onChange={handleChange}
            />
        </section>
    )
};

Search.propTypes = {
    getSearch: PropTypes.func,
    isHome: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        search: state.search,
    }
}

const mapDispatchToProps = {
    getSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);