import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { storeContext } from './context';
import { useRootData } from './hook';

export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li>{city}</li>
      ))}
    </ul>
  );
};
// export const CityList = () => {
//   const store = React.useContext(storeContext);
//   if (!store) throw Error("Store shouldn't be null!");
//   return useObserver(() => {
//     return <CityView cities={store.filteredCities} />;
//   });
// };

export const CityList = () => {
  const cities = useRootData((store) => store.filteredCities);
  return <CityView cities={cities} />;
};
export default CityList;
