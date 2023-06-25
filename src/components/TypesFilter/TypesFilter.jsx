import { useDispatch, useSelector } from 'react-redux';
import css from './TypesFilter.module.css';
import { getContactTypes } from '../../redux/selectors';
import TypesFilterItem from './TypesFilterItem/TypesFilterItem';
import { clearActiveTypes } from '../../redux/slices/filtersSlice';
import { useEffect, useState } from 'react';
import TypesForm from './TypesForm/TypesForm';
import { fetchTypes } from '../../redux/operations';

const TypesFilter = () => {
  const { contactTypes } = useSelector(getContactTypes);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypes())
  }, [dispatch])

  const onModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className={css.typesFilterWrap}>
      <p className={css.wrapLabel}>Show only:</p>
      <ul className={css.typesList}>
        <button onClick={() => dispatch(clearActiveTypes())} className={css.allBtn}>ALL</button>
        {contactTypes &&
          contactTypes.map(type => (
            <TypesFilterItem key={type.id} type={type} />
          ))}
      </ul>
      <button className={css.addBtn} type="button" onClick={onModalToggle}>
        Add
      </button>
      {isModalOpen && <TypesForm close={onModalToggle}/>}
    </div>
  );
};

export default TypesFilter;
