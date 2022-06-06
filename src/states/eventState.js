import {atom} from 'recoil';
const userState = atom({
    key: 'eventState', // unique ID (with respect to other atoms/selectors)
    default: '', // valeur par défaut (alias valeur initials)
  });