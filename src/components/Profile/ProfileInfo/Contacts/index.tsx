import { FC } from 'react';
import { selectProfileContacts } from '../../../../selectors/profileSelector';
import { useSelector } from 'react-redux';
import { Contact } from './Contact';

const socialNetworks = {
  facebook: 'Facebook',
  github: 'GitHub',
  instagram: 'Instagram',
  twitter: 'Twitter',
  youtube: 'YouTube'
};

export const Contacts: FC = () => {
  const contacts = useSelector(selectProfileContacts);

  if (!contacts) return null;

  const contactsArray = [];

  for (const key in socialNetworks) {
    contactsArray.push({
      link: contacts[key as keyof typeof socialNetworks],
      title: socialNetworks[key as keyof typeof socialNetworks]
    });
  }

  return (
    <div>
      <h3>Contacts:</h3>
      {contactsArray.map((el) => (
        <Contact key={el.title} {...el} />
      ))}
    </div>
  );
};
