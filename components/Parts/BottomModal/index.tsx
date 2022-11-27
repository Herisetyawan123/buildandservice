import Close from "../../Element/Close"
import LayerBlur from "../LayerBlur"
import styled, { keyframes } from "styled-components";

const scaleUp = keyframes`

    0% { top: 100%;}
    100% { top: 180px;}
 `;

const BoxWhite = styled.div`
  background: white;
  position: fixed;
  top: 180px;
  bottom: -60px;
  left: 0;
  right: 0;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: white;
  padding: 2.5rem 0;
  padding-top: 2.5rem;
  transition: all 0.6s;
  animation-name: ${scaleUp};
  animation-duration: 0.5s;
`;



const BottomModal = ({ click, onClick }) => {
  return (
    <LayerBlur hidden={click}>
      <div className="w-full h-full" onClick={onClick}>
        <BoxWhite>
          <Close onClick={onClick} />
          <hr />
          <div className="m-5">
            <h1>Hallo dunia</h1>
          </div>
        </BoxWhite>
      </div>
    </LayerBlur>

  )
}

export default BottomModal;