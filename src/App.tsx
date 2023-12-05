import Input from "./components/Input";

function App() {
  return(
    <main>
      <Input id="name" label="Your name"/>
      <Input id="age" label="Your age" type="number"/>
    </main>
  );
}

export default App;
