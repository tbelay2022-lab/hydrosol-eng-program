import Nav from "../_nav/Nav";

export default function Page() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Chapter 1</h1>
      <p>Welcome to Chapter 1 of the Hydrosol Engineering Program.</p>

      <Nav prev={undefined} next="/chapters/chapter2" />
    </div>
  );
}