import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const InputBase = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    padding: 7px 10px;
    font-size: 15px;
    margin-bottom: 10px;
`

const Input = ({ onChange, placeholder, ...props }) => {
    return(
        <div>
            <InputBase 
                onChange={onChange}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )

}


// Input.defaultProps = {
//     value: '',  
// }

// Input.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string,
// }


export default Input
