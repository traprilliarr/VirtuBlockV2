import About from "@/common/module/About/About";
import Feature from "@/common/module/Feature/Feature";
import Hero from "@/common/module/Hero/Hero";
import Product from "@/common/module/Product/Product";
import Project from "@/common/module/Project/Project";
import Values from "@/common/module/Values/Values";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Feature/>
      <Product />
      <Project />

      
      {/* <About /> */}
      {/* <Values /> */}
    </div>
  );
}
