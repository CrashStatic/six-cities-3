import { ILocationItem } from '../types';

export function LocationItem({isActive, href, title}: ILocationItem) {
  const className = isActive ? 'locations__item-link tabs__item' : 'locations__item-link tabs__item tabs__item--active';
  const hrefItem = isActive ? '' : href;

  return (
    <li className="locations__item">
      <a className={className} href={hrefItem}>
        <span>{title}</span>
      </a>
    </li>
  );
}
