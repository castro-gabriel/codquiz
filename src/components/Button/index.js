// import PropTypes from 'prop-types'
import styled from 'styled-components'
import db from '../../../db.json'

const ButtonBase = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: ${db.theme.colors.darkColor};
    color: #fff;
    padding: 12px 10px;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        background-color: #0f0d0b;
    }
`


const Button = ({ type, disabled, ...props}) => {
    return (
        <div>
            <ButtonBase
                type={type}
                disabled={disabled}
                {...props}
            />
        </div>
    )
}

export default Button