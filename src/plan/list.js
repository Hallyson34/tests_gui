import axios from "axios";
import { useEffect, useState } from "react";

export default function ListPlan({ setShowCreate }) {
  const baseUrl = "http://localhost:3000/plan";
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/find-all`)
      .then((response) => {
        console.log(response.data)
        setPlans(response.data);
      })
      .catch((error) => alert(error.response?.data?.message[0]));
  }, []);

  function edit(plan) {
    setShowCreate(plan);
  }

  return (
    <div>
      {plans.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <td
                style={{
                  border: "2px solid #000",
                  padding: "5px",
                  fontWeight: "bold",
                }}
              >
                Nome
              </td>
              <td
                style={{
                  border: "2px solid #000",
                  padding: "5px",
                  fontWeight: "bold",
                }}
              >
                Valor
              </td>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr
                id={`row${index}`}
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => edit(plan)}
              >
                <td>{plan.name}</td>
                <td>{plan.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "Não há planos inseridos ainda"
      )}
      <button id="create" style={{ marginTop: "20px" }} onClick={() => setShowCreate(true)}>
        Criar Plano
      </button>
    </div>
  );
}
