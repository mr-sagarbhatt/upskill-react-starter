import {
  Container,
  Heading1,
  Btn,
  BtnDark,
  StyledLink,
  CheckBox,
  CheckBoxLabel,
  ParentDiv,
  ChildDiv,
  Input,
} from './components'

const Index = () => {
  return (
    <Container>
      <Heading1 color="#202020">Styled Component</Heading1>
      <Btn>Light</Btn>
      <BtnDark>Dark</BtnDark>
      {/* // * to change which tag or component a styled component renders. */}
      {/* // * use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote */}
      <BtnDark as="a">Link</BtnDark>
      <div>
        <StyledLink className="home" to="/" target="_blank">
          Home
        </StyledLink>
        <div className="flex gap-2 place-items-center">
          <CheckBox></CheckBox>
          <CheckBoxLabel>styled checkbox</CheckBoxLabel>
        </div>
        <ParentDiv>
          Parent Div
          <ChildDiv className="children">Child Div</ChildDiv>
          <ChildDiv>Child Div</ChildDiv>
        </ParentDiv>
      </div>
      <div>
        <Input placeholder="A small text input" />
        <br />
        <Input placeholder="A bigger text input" size="1.2sem" />
      </div>
    </Container>
  )
}

export default Index
