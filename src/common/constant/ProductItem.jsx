import { AiOutlineCloudServer } from "react-icons/ai";
import { BsGpuCard } from "react-icons/bs";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";



export const ProductItem = [
    {
      title: 'VirtuBlock Token',
      desc: "The VirtuBlock token is a cryptocurrency token that has utility in the form of VirtuWallet. VirtuBlock is created on the Ethereum Blockchain network.",
      key: (
        <div className="w-full flex flex-col gap-2">
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        85% Liquidity Pool.
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        5% Stake.
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        10% Marketing Partnership.
        </h1>
        </div>
        </div>
      )
      ,
      linkLabel: 'Read Whitepaper',
      img: '/Aset/p1.png',
      link: 'https://drive.google.com/file/d/1VZ80t7OEs9F1CC0QtQoZ1latbESdfk23/view?usp=sharing',
      icon : <BsGpuCard className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
    },
    {
      title: 'VirtuBlock Wallet',
      desc: "VirtuWallet is built on a robust technological foundation designed to provide users with a secure, efficient, and user-friendly cryptocurrency wallet experience.",
      key: (
        <div className="w-full flex flex-col gap-2">
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Retail Payments
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Online Transactions
        </h1>
        </div>
        <div className="flex justify-start items-center gap-3">
        <CiCircleCheck size={30} />
        <h1>
        Financial Inclusion
        </h1>
        </div>
        </div>
      ),
      linkLabel: 'Download App',
      img: '/Aset/p2.png',
      link: '#',
      icon : <BsGpuCard className="h-10 w-10  dark:text-black text-white group-hover:text-white " />
    },
 
   

   
  
  ];