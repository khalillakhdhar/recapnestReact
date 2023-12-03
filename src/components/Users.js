import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Le nom est requis'),
  email: Yup.string().email('Adresse email invalide').required('L\'adresse email est requise'),
});

const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/users`)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Erreur lors du chargement des utilisateurs:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/users/${id}`);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    }
  };

  return (
    <div>
        
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => handleDelete(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(`${apiBaseUrl}/users`, values);
      // Recharger la liste des utilisateurs après l'ajout
      // (idéalement, vous pouvez également mettre à jour l'état local des utilisateurs)
      window.location.reload();
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    }
  };

  return (
    <div>
      <h2>Ajouter un Utilisateur</h2>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Nom :</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email :</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <button type="submit">Ajouter l'utilisateur</button>
        </Form>
      </Formik>
    </div>
  );
};

export { UserList, UserForm };
