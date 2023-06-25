import { useDispatch, useSelector } from 'react-redux';
import css from './TypesFilterItem.module.css';
import { setActiveType } from '../../../redux/slices/filtersSlice';
import { selectActiveTypes } from '../../../redux/selectors';

const TypesFilterItem = ({ type }) => {
  const { name, color } = type;
  const activeTypes = useSelector(selectActiveTypes);

  const dispatch = useDispatch();

  const onToggleActive = type => {
    dispatch(setActiveType(type));
  };
  return (
    <button
      onClick={() => onToggleActive(type)}
      type="button"
      className={css.filterButton}
      style={{backgroundColor: activeTypes.includes(name) && color}}
    >
      {name}
    </button>
  );
};
export default TypesFilterItem;
