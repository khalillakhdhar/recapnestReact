import React, {useState} from 'react'

export default function Parite() {
    const [formData, setFormData] = useState({
        v1: 0,
        v2: 0,
        });
        const handleChange = (event) => {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
const parite = () => {
    let v1=parseInt(formData.v1);
    let v2=parseInt(formData.v2);
    let res="";
    if (v1%2===0) {
        res="v1 est pair";
    } else {
        res="v1 est impair";
    }
    if (v2%2===0) {
        res+=" et v2 est pair";
    } else {
        res+=" et v2 est impair";
    }
    alert(res);
}
  return (
    <div>
        <h1>Parité</h1>
        <form>
            <label htmlFor="v1">v1</label>
            <input type="text" id="v1" name="v1" value={formData.v1} onChange={handleChange} />
            <label htmlFor="v2">v2</label>
            <input type="text" id="v2" name="v2" value={formData.v2} onChange={handleChange} />
            <button type="button" onClick={parite}>Parité</button>
            </form>
      
    </div>
  )
}

