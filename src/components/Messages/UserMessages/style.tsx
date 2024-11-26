import styled from 'styled-components';

export const UserMessagesBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const MessagesStyled = styled.div``;

export const UserMessageStyled = styled.div<{ $isCurrentUserSender: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: ${(props) =>
    props.$isCurrentUserSender ? 'row-reverse' : 'row'};
`;
