import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ onAddTodo }) => {
  const formik = useFormik({
    initialValues: {
      todoText: '',
    },
    validationSchema: Yup.object({
      todoText: Yup.string().required('Champ requis'),
    }),
    onSubmit: (values, { resetForm }) => {
      onAddTodo(values.todoText);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="todoText">Ajouter un Todo :</label>
      <input
        type="text"
        id="todoText"
        name="todoText"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.todoText}
      />
      {formik.touched.todoText && formik.errors.todoText ? (
        <div>{formik.errors.todoText}</div>
      ) : null}
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TodoForm;
