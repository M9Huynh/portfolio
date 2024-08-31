import About from "./components/About";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fffcf2] md:flex justify-center py-20 px-32 ">
      <div><NavBar /></div>
      <div className="max-w-2xl px-10">
        <div className=""><About /></div>
        <div className=""><Experience /></div>
        <div className=""><Projects /></div>
        <div className=""><Footer /></div>
      </div>
      <title>Matthew Huynh</title>
    </main>
  );
}
