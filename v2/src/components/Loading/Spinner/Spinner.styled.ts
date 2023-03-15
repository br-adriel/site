import styled from 'styled-components';

export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & div {
    box-sizing: border-box !important;
  }

  & > div {
    position: absolute;
    width: 116px;
    height: 116px;
    border-radius: 50%;
    border: 16px solid #000;
    border-color: #3a86ff transparent #3a86ff transparent;
    animation: spin 0.8928571428571428s linear infinite;
  }

  & > div:nth-child(2) {
    border-color: transparent;
  }

  & > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  & > div:nth-child(2) div:before,
  & > div:nth-child(2) div:after {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: -16px;
    left: 34px;
    background: #3a86ff;
    border-radius: 50%;
    box-shadow: 0 100px 0 0 #3a86ff;
  }

  & > div:nth-child(2) div:after {
    left: -16px;
    top: 34px;
    box-shadow: 100px 0 0 0 #3a86ff;
  }

  & {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }

  & div {
    box-sizing: content-box;
  }
`;

export const Wrapper = styled.div`
  width: 116px;
  height: 116px;
  display: inline-block;
  overflow: hidden;
`;
