import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { DailyBudget } from "./components/DailyBudget";
import { Main } from "./components/Main";
import { SavingsStatus } from "./components/SavingsStatus";
import { Searchinput } from "./components/Searchinput";
import { Typography } from "./components/Typography";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <Searchinput name="q" />
          <div>
            <Typography variant="h1">Olá, Saulo!</Typography>
            <Typography>Veja como estão suas finanças hoje.</Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-6">
            <Card>
              <Card.Header>Orçamento diário disponível</Card.Header>
              <Card.Body>
                <DailyBudget value={42} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
