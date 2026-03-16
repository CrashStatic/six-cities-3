import { IData } from '..';
import { Main } from '../main/Main';

export function App({found, city}: IData) {
  return (
    <Main found={found} city={city} />
  );
}
