import styled from 'styled-components';
import { ContainerSection } from '../Container';

export const Section = styled(ContainerSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px 20px;

  img {
    max-height: 70vh;
    max-width: 90%;
    object-fit: contain;
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

  @-moz-document url-prefix() {
    img {
      min-width: 80%;
      max-width: 80%;
    }
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

    @-moz-document url-prefix() {
      img {
        min-width: 37%;
        max-width: 37%;
      }
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 4.5rem;
    }

    @-moz-document url-prefix() {
      img {
        min-width: 40%;
        max-width: 40%;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 5rem;
    }
  }
`;
