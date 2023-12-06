import {useRef} from 'react'
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Form from './components/Form';

function App() {
  const input = useRef(null)

  function handleSave(data: unknown) {
    const extratedData = data as {name: string, age: string}
    console.log(extratedData)
  }

  return(
    <main>
      <Input id="name" label="Your name"/>
      <Input id="age" label="Your age" type="number"/>
      <Input id="test" label="Test input" ref={input}/>
      <p>
        <Button>A button</Button>
      </p>
      <p>
      <Button href="https://google.com" target="_blank">A link</Button>
      </p>
      <Container as={Button} onClick={() => window.alert("You've clicked on click button")}>Click me</Container>
      <Form onSave={handleSave}>
        <Input id="occupation" label="Your occupation"/>
        <Input id="city" label="Your city"/>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
