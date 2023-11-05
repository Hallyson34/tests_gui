import { useState } from "react";
import ListPlan from "./plan/list";
import CreatePlan from "./plan/create";

function App() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="App">
      {showCreate ? (
        <CreatePlan setShowCreate={setShowCreate} showCreate={showCreate} />
      ) : (
        <ListPlan setShowCreate={setShowCreate} />
      )}
    </div>
  );
}

export default App;
