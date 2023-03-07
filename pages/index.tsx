import Transition from "../components/Atom/Transition/Transition";
import Head from "../components/Head";
import Layout from "@components/Molecule/Layout/Layout";
export default function Main() {
  return (
    <div>
      <Head />
      <Layout>
        <h1>HomePage</h1>
      </Layout>
      <Transition key="homepage" />
    </div>
  );
}
