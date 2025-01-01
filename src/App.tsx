import Counter from "./components/Counter";
import { Greetings } from "./components/Greetings";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Greetings />
      <Counter/>
      <Users/>
    </div>
  );
}

export default App;
