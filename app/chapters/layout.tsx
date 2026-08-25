import Sidebar from "../components/Sidebar";

export default function ChaptersLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "2rem",
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}