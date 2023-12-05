import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return(
    <main>
      <Input id="name" label="Your name"/>
      <Input id="age" label="Your age" type="number"/>
      <p>
        <Button>A button</Button>
      </p>
      <p>
      <Button href="https://google.com" target="_blank">A link</Button>
      </p>
    </main>
  );
}

export default App;
