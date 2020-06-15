import STATES from '../constants/states';

export default function getStateQueryParam(searchString) {
  const params = searchString.replace('?', '').split('&').map(p => p.split('='));
  for (let p of params) {
    if (p && p[0] === 'state' && Object.keys(STATES).includes(p[1])) return p[1];
  }
  return null;
}
