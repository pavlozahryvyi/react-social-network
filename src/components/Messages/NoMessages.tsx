import styled from 'styled-components';

const NoMessagesText = styled.div`
  height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoMessages: React.FC = () => {
  return (
    <NoMessagesText>
      <p>Select person for messaging</p>
    </NoMessagesText>
  );
};
