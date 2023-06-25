import { useState } from 'react';
import css from './TypesForm.module.css';
import { useDispatch } from 'react-redux';
import { createType } from '../../../redux/operations';

const TypesForm = ({close}) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const dispatch = useDispatch();

  const onInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'color':
        setColor(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(
      createType({
        name,
        color,
      })
    );
    close()
  };

  return (
    <div className={css.formModal}>
      <form className={css.form} autoComplete="off" onSubmit={onFormSubmit}>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={onInputChange}
          required
        />
        <input
          className={css.input}
          type="text"
          name="color"
          value={color}
          pattern="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          placeholder="Color (#ffffff)"
          onChange={onInputChange}
          required
        />
        <button className={css.createBtn} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default TypesForm;
