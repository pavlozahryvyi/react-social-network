type TypeContact = {
  title: string;
  link: string;
};

export const Contact: React.FC<TypeContact> = ({ title, link }) => (
  <p>
    <a href={`${link}`}>{title}</a>
  </p>
);
