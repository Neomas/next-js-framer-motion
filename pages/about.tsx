import Head from "../components/Head";
import Transition from "../components/Atom/Transition/Transition";
import Layout from "@components/Molecule/Layout/Layout";
export default function Main() {
  return (
    <div>
      <Head />

      <Layout>
        <h2>About</h2>
      </Layout>

      <Transition key="about" />
    </div>
  );
}
