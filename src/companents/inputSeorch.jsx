import styled from "styled-components";


function InputSeorch(props) {
    return (
        <Wrapper>
              <input placeholder="Qidirish....  "  onKeyUp={props.seorchProducts}/>
        </Wrapper>
    )
}

export default InputSeorch;

const Wrapper = styled.div`
        margin: 0  150px 40px  ;

      input {
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
        gap: 8px;
        width: 507px;
        height: 56px;
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
        border-radius: 13px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
        margin: 60px 0 0 223px
      }
`;