import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

export const Filter = ({ onChange }) => (
    < label className={style.labelFilter}>
    Find contacts by name
    <input className={style.inputFilter} type="text" name="filter" onChange={onChange}/>
    </label>
)

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}