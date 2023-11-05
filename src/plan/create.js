import axios from "axios";
import { useEffect, useState } from "react";

export default function CreatePlan({ showCreate, setShowCreate }) {
  const baseUrl = "http://localhost:3000/plan";
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [plan, setPlan] = useState(undefined);

  useEffect(() => {
    if (typeof showCreate === "object") {
      setPlan(showCreate);
      setName(showCreate.name);
      setValue(showCreate.value);
    }
    console.log("sjnda", typeof showCreate);
  }, []);

  function save() {
    console.log(name, value);
    if (!plan) {
      axios
        .post(`${baseUrl}/create`, {
          name,
          value: Number(value),
        })
        .then((response) => {
          setShowCreate(false);
        })
        .catch((error) => alert(error.response?.data?.message[0]));
    } else {
      axios
        .put(`${baseUrl}/update/${plan.id}`, { name, value: Number(value) })
        .then((response) => {
          setShowCreate(false);
        })
        .catch((error) => alert(error.response?.data?.message[0]));
    }
  }

  function remove() {
    console.log(plan);
    axios
      .delete(`${baseUrl}/delete/${plan.id}`)
      .then((response) => {
        setShowCreate(false);
      })
      .catch((error) => alert(error.response?.data?.message[0]));
  }

  return (
    <div>
      <label>Nome</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Valor</label>
      <input
        id="value"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button id="save" onClick={() => save()}>Salvar</button>
      {plan && <button id="remove" onClick={() => remove()}>excluir</button>}
    </div>
  );
}
