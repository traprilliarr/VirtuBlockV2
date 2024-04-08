import H1 from "@/common/component/element/H1";
import React from "react";
import ProductMenu from "./components/ProductMenu";

export default function Product() {
  return (
    <div className="h-auto max-w-[1500px] py-10 px-5 lg:px-10  overflow-hidden flex-col flex justify-center  w-full ">
      <div className="w-full flex gap-5 flex-col py-5 justify-center items-center">

        <H1
          title="VirtuBlock Tokenomics"
          className="md:!text-5xl !text-xl lg:w-[50%] w-full font-medium !justify-center text-center"
        />

      </div>
      <div className="w-full py-5">
        <ProductMenu/>
      </div>
    </div>
  );
}
