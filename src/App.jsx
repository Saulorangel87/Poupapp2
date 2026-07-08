import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { Searchinput } from "./components/Searchinput";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <Searchinput name="q" />
        </Main>
      </Container>
    </div>
  );
}

export default App;
