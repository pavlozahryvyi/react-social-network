type PageContentProps = {
  width?: string;
  children?: React.ReactNode;
};

export const PageContent: React.FC<PageContentProps> = ({
  children,
  width: blockWidth
}) => {
  return (
    <main
      style={{
        width: blockWidth || '100%',
        margin: `0 ${blockWidth ? 'auto' : 0}`
      }}
    >
      {children}
    </main>
  );
};
