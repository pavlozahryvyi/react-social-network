import styled from 'styled-components';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  height: 50px;
`;

const Header = styled.h3`
  color: white;
  font-weight: bold;
  margin: 0 20px 0 0;
`;

type ContentHeaderProps = {
  pageTitle: string;
  children?: React.ReactNode;
};

export const PageHeader: React.FC<ContentHeaderProps> = (props) => {
  const { pageTitle, children } = props;
  return (
    <HeaderBlock>
      <Header>{pageTitle}</Header>
      {children}
    </HeaderBlock>
  );
};
