import styled from 'styled-components'

const AlternativesForm = styled.form`
    label {
        &[data-selected="true"] {
            background-color: ${({theme}) => theme.colors.selectedColor};

            &[data-status="SUCCESS"] {
                background-color: ${({theme}) => theme.colors.success};  
            }

            &[data-status="ERROR"] {
                background-color: ${({theme}) => theme.colors.wrong};  
            }
        }

        &:focus {
            background-color: ${({theme}) => theme.colors.secondary};
        }
    }

    button {
        margin-top: 24px;
    }
`

export default AlternativesForm