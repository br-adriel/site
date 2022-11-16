import styled from 'styled-components';
import ContainerSection from '../ContainerSection';

export const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    max-height: 70vh;
  }

  h1 {
    font-size: 3rem;
  }

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    margin-top: -0.75rem;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 40px;

    h1 {
      font-size: 4rem;
    }

    h1,
    h2 {
      text-align: left;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 5rem;
    }
  }
`;
