import {styled,css} from 'styled-components';


const Container = styled.div`
  display:flex;
`;

const Button = styled.button`
  backgroud : transparent;
  border-radius : 3px;
  border : 2px solid #3c5b69;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) => 
    props.primary && 
    css`
      background: #009cd5;
      color: white;
    `
  }
`;

export default function StyledComponents(){
    return(
        <Container>
            <Button>노말버튼</Button>
            <Button primary>특별버튼</Button>
        </Container>
    )
};