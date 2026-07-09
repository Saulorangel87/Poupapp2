import { Aside } from "./components/Aside";
import Card from "./components/Card";
import { Container } from "./components/Container";
import { DailyBudget } from "./components/DailyBudget";
import { IconBank, IconWallet } from "./components/Icons";
import { Main } from "./components/Main";
import { SavingsStatus } from "./components/SavingsStatus";
import { Searchinput } from "./components/Searchinput";
import { Typography } from "./components/Typography";

const transactions = [
  {
    name: "iFood",
    value: "-R$25,00",
    date: "01/10/2024",
  },
  {
    name: "Papelaria Milia",
    value: "-R$50,00",
    date: "03/10/2024",
  },
  {
    name: "Freela (2a parte)",
    value: "+R$100,00",
    date: "03/10/2024",
    income: true,
  },
  {
    name: "Magazine Luiza",
    value: "-R$200,00",
    date: "05/10/2024",
  },
];

const accounts = [
  {
    name: "Anybank",
    value: "R$ 1.200,00",
  },
  {
    name: "Bytebank",
    value: "R$500,00",
  },
  {
    name: "Switch Bank",
    value: "R$ 1.800,00",
  },
];

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
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus />
              </Card.Body>
            </Card>
            <Card className="min-h-[320px]">
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body className="justify-between gap-6">
                <div className="flex flex-col gap-5">
                  {transactions.map((transaction) => (
                    <div key={`${transaction.name}-${transaction.date}`} className="flex justify-between gap-4">
                      <div>
                        <p
                          className={`m-0 text-sm leading-[120%] font-bold ${
                            transaction.income ? "text-secondary-income" : "text-secondary-expense"
                          }`}
                        >
                          {transaction.name}
                        </p>
                        <p
                          className={`m-0 mt-1 text-sm leading-[120%] font-bold ${
                            transaction.income ? "text-secondary-income" : "text-secondary-expense"
                          }`}
                        >
                          {transaction.value}
                        </p>
                      </div>
                      <span className="text-neutral-text text-xs leading-[120%] font-bold whitespace-nowrap">
                        {transaction.date}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="self-center border border-neutral-text rounded-full py-2 px-5 text-neutral-text text-xs leading-[120%] font-bold flex items-center gap-2">
                  <IconWallet />
                  Adicionar transação
                </button>
              </Card.Body>
            </Card>
            <Card className="min-h-[320px]">
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body className="justify-between gap-6">
                <div className="flex flex-col gap-7">
                  {accounts.map((account) => (
                    <div key={account.name} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-neutral-text text-sm leading-[120%] font-bold">
                        <IconBank />
                        {account.name}
                      </div>
                      <div className="text-neutral-text text-sm leading-[120%] font-bold text-right">
                        <p className="m-0">Saldo</p>
                        <p className="m-0 mt-1">{account.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="self-center border border-neutral-text rounded-full py-2 px-5 text-neutral-text text-xs leading-[120%] font-bold flex items-center gap-2">
                  <IconBank />
                  Adicionar conta
                </button>
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
