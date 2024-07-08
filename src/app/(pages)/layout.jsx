import Navbar from "@/components/Navbar";

function layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="align-elements mt-10">{children}</main>
    </>
  );
}

export default layout;
