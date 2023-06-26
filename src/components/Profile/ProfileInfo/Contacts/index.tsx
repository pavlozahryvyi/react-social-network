import { FC } from 'react';
import { getProfileContacts } from '../../../../selectors/profileSelector';
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
  const contacts = useSelector(getProfileContacts);

  if (!contacts) return null;

  console.log('---contacts', contacts);

  const contactsArray = [];

  for (const key in socialNetworks) {
    contactsArray.push({
      link: contacts[key as keyof typeof socialNetworks],
      title: socialNetworks[key as keyof typeof socialNetworks]
    });
  }

  return (
    <>
      {contactsArray.map((el) => (
        <Contact key={el.title} {...el} />
      ))}
    </>
  );
};
