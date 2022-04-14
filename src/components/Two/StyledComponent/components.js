import styled from 'styled-components'
import { Link } from 'react-router-dom'

// * Wrapper component
const Container = styled.article`
  padding: 0 4vw;
`

// * Adapting based on props
const Heading1 = styled.h1`
  color: ${(props) => props.color || '#202020'};
  font-size: 1.5rem;
`

const Btn = styled.button`
  padding: 0.5rem;
  margin: 0.3rem;
  border: 1px solid #111;
  border-radius: 5px;
  width: fit-content;
  display: inline-block;
`
// * To easily make a new component that inherits the styling of another, just wrap it in the styled() constructor.
const BtnDark = styled(Btn)`
  color: #fff;
  background-color: #202020;
`
const StyledLink = styled(Link)`
  text-decoration: underline;
  color: blue;
`

export { Container, Heading1, Btn, BtnDark, StyledLink }

/**
 The CSS rules are automatically vendor prefixed, styled-components takes care of that for you!
 Styled components uses stylis.js package under the hood for prefixing the css rules.
 */
