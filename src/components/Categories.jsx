import React from 'react'
import '../assets/styles/components/Categories.scss'
import PropType from 'prop-types'

const Catergories = ({children, title}) => (
    <div className="categories">
        <h3 className="categories__title">{title}</h3>
        {children}
    </div>
);

Catergories.PropType = {
    title: PropType.string
}

export default Catergories;