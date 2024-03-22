import { Icon } from "@iconify/react";

import { Card } from "@/components/shared/card/Card";
import Button from "@/components/shared/button/Button";

import { STAR_ICON } from "@/constants";

const App = () => {
  return (
    <>
      <Card size="lg" onClick={() => console.log("hello")}>
        Hello
      </Card>
      <Button>Read More</Button>
      <Button size="sm" color="secondary">
        Read More 1
      </Button>
      <Button size="lg" color="danger">
        Read More 2 <Icon icon={STAR_ICON} />
      </Button>
    </>
  );
};

export default App;
