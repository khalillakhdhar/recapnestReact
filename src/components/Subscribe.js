import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      nom: '',
      prenom: '',
      age: '',
      email: '',
    },
    validationSchema: Yup.object({
      nom: Yup.string().required('Champ requis'),
      prenom: Yup.string().required('Champ requis'),
      age: Yup.number().min(18, 'L\'âge doit être supérieur ou égal à 18').required('Champ requis'),
      email: Yup.string().email('Format email invalide').required('Champ requis'),
    }),
    onSubmit: (values) => {
      alert('Formulaire d\'inscription soumis avec succès !');
      console.log(values);
      // Envoyer les données à votre backend ou effectuer d'autres actions
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        name="nom"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nom}
      /><br></br>
      {formik.touched.nom && formik.errors.nom ? <div>{formik.errors.nom}</div> : null}
      <br></br>
      <label htmlFor="prenom">Prénom :</label>
      <input
        type="text"
        id="prenom"
        name="prenom"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.prenom}
      /><br></br>
      {formik.touched.prenom && formik.errors.prenom ? <div>{formik.errors.prenom}</div> : null}
      <br></br>
      <label htmlFor="age">Âge :</label>
      <input
        type="text"
        id="age"
        name="age"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
      />
      <br></br>
      {formik.touched.age && formik.errors.age ? <div>{formik.errors.age}</div> : null}
      <br></br>
      <label htmlFor="email">Email :</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <br></br>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br></br>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Subscribe;
