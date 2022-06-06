import {atom} from 'recoil';
const userState = atom({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: '', // valeur par défaut (alias valeur initials)
  });