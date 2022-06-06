import {atom} from 'recoil';
const apiState = atom({
    key: 'apiState', // unique ID (with respect to other atoms/selectors)
    default: '', // valeur par défaut (alias valeur initials)
  });