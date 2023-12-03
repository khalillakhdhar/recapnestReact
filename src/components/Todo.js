import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Le titre est requis'),
  completed: Yup.boolean().required('Le statut est requis'),
});

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Charger les todos au chargement initial
    axios.get(`${apiBaseUrl}/todos`)
      .then(response => setTodos(response.data))
      .catch(error => console.error('Erreur lors du chargement des todos:', error));
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Envoyer la requête POST pour créer un nouveau todo
      const newTodo = await axios.post(`${apiBaseUrl}/todos`, values);

      // Mettre à jour l'état des todos
      setTodos([...todos, newTodo.data]);

      // Réinitialiser le formulaire
      resetForm();
    } catch (error) {
      console.error('Erreur lors de la création du todo :', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Envoyer la requête DELETE pour supprimer le todo
      await axios.delete(`${apiBaseUrl}/todos/${id}`);

      // Mettre à jour l'état des todos
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Erreur lors de la suppression du todo :', error);
    }
  };

  return (
    <div>
      <h1>CRUD avec Formik, Yup et Axios pour Todos</h1>
      <Formik
        initialValues={{ title: '', completed: false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Titre :</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label htmlFor="completed">Complété :</label>
            <Field type="checkbox" id="completed" name="completed" />
            <ErrorMessage name="completed" component="div" />
          </div>

          <button type="submit">Ajouter un todo</button>
        </Form>
      </Formik>

      <h2>Liste des Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <p>Complété : {todo.completed ? 'Oui' : 'Non'}</p>
            <button onClick={() => handleDelete(todo.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
