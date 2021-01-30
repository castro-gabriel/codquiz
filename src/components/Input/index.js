import React from 'react'
import styled from 'styled-components'
import db from '../../../db.json'

const InputBase = styled.input`
    width: 100%;
    border: .1px solid #6b6b6b;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.darkOpacity};
    color: #fff;
    padding: 12px 10px;
    font-size: 15px;
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border: .1px solid #6b6b6b;
        border-radius: 4px;
    }
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
