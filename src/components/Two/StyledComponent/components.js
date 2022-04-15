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

// * The preprocessor, stylis, supports scss-like syntax for automatically nesting styles.Through this preprocessing, styled-components supports some advanced selector patterns.

const StyledLink = styled(Link)`
  color: blue;
  /* // * &: a single ampersand refers to all instances of the component; it is used for applying broad overrides: */
  &: hover {
    text-decoration: underline;
  }
  &.home {
    color: #124445;
  }
`
// * .attrs({/*props */})
const CheckBox = styled.input.attrs({ type: 'checkbox' })``

const CheckBoxLabel = styled.label`
  color: black;
  /* // * && a double ampersand refers to an instance of the component; this is useful if you're doing conditional styling overrides and don't want a style to apply to all instances of a particular component: */
  ${CheckBox}:checked + && {
    color: blue;
  }
`

const ParentDiv = styled.div`
  display: flex;
  gap: 1rem;
  color: blue;

  /* // * If you put selectors in without the ampersand, they will refer to children of the component. */
  .children {
    color: black;
  }
`

const ChildDiv = styled.div`
  color: green;
`

// * To avoid unnecessary wrappers that just pass on some props to the rendered component, or element, you can use the .attrs constructor. It allows you to attach additional props (or "attributes") to a component.
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: 'text',

  // or we can define dynamic ones
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`

export { Container, Heading1, Btn, BtnDark, StyledLink, CheckBox, CheckBoxLabel, ParentDiv, ChildDiv, Input }

/**
 -The CSS rules are automatically vendor prefixed, styled-components takes care of that for you!
 -Styled components uses stylis.js package under the hood for prefixing the css rules.
 -It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass.
 -The preprocessor we use, stylis, supports scss-like syntax for automatically nesting styles.Through this preprocessing, styled-components supports some advanced selector patterns
    -&: a single ampersand refers to all instances of the component; it is used for applying broad overrides:
    -&&:
      -&& a double ampersand refers to an instance of the component; this is useful if you're doing conditional styling overrides and don't want a style to apply to all instances of a particular component:
      -&& a double ampersand alone has a special behavior called a "precedence boost"; this can be useful if you are dealing with a mixed styled-components and vanilla CSS environment where there might be conflicting styles:
    -If you put selectors in without the ampersand, they will refer to children of the component.
  -To avoid unnecessary wrappers that just pass on some props to the rendered component, or element, you can use the .attrs constructor. It allows you to attach additional props (or "attributes") to a component.
  Notice that when wrapping styled components, .attrs are applied from the innermost styled component to the outermost styled component.
 */
