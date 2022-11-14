import React from 'react';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import ErrorDisplay from '../components/ErrorDisplay';

interface IProps {
  title?: string;
  message?: string;
}

const Error: React.FC<IProps> = ({ title, message }) => {
  return (
    <Section>
      <ErrorDisplay title={title} message={message} />
    </Section>
  );
};

const Section = styled(ContainerSection)`
  display: flex;
  justify-items: center;
  align-items: center;
`;

export default Error;
