import { data1 } from "../assets/data/data1";
import { Grid } from "../components/Grid";

export function Home() {
  return (
    <div>
      <Grid data={data1} />
    </div>
  );
}
