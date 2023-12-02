import React,{useState} from 'react'

export default function Factoriel() {
// calcule de factoriel
// 5! = 5*4*3*2*1

const [formData, setFormData] = useState({
    n: 1,
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // appel de la fonction factoriel
        alert(factoriel(formData.n));
    }
const factoriel = (n) => {
    let res=1;
    for (let i=2;i<=n;i++) {
        res=res*i;
    }
    return res;
}
  return (
    <div>
      <h1>Factoriel</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" name="n" value={formData.n} onChange={handleChange} />
        <button type="submit">Calculer</button>
      </form>

    </div>
  )
}



