// import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonBase = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgba(0, 0, 0);
    color: #fff;
    padding: 12px 10px;
    font-size: 16px;
    font-weight: bold;  
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