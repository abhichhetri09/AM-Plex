import { Card } from "@/components/shared/button/card/Card";

const App = () => {
  return (
    <Card size="lg" onClick={() => console.log("hello")}>
      Hello
    </Card>
  );
};

export default App;
