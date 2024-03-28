import { useState } from "react";
import CreateQuizForm from "./Components/CreateQuizForm";
import QuizForm from "./Components/QuizForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CreateQuizForm /> */}
      <QuizForm />
    </>
  );
}

export default App;
