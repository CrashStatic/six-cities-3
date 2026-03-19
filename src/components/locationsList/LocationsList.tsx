import { LocationItem } from './components/LocationItem';
import { locations } from './locations';

export function LocationsList() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((item) => (
          <LocationItem key={item.id} isActive={item.isActive} href={item.href} title={item.title} />
        ))}
      </ul>
    </section>
  );
}
