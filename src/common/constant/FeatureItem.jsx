


import { IoIosCloudOutline } from "react-icons/io";
import {FaPiedPiper, GrMultiple } from "react-icons/gr";
import { MdMiscellaneousServices , MdAnimation,MdOutlineSecurity,MdLan  } from "react-icons/md"
import { AiOutlineRobot } from "react-icons/ai";
import { TbCloudComputing } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { FaNfcDirectional } from "react-icons/fa6";
import { BsFilePerson } from "react-icons/bs";

export const FeatureItem = [
  {
    title: 'Phase 1',
    shortDesc: 'Development and Testing',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Initiate development of VirtuBlock Wallet (VirtuWallet) focusing on core features like multi-network support, NFC integration, and user-friendly interface, followed by internal testing to ensure functionality and security, while drafting marketing materials and strategies for the launch.</h1>
      </div>
    ),
    icon : <IoIosCloudOutline className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    title: 'Phase 2',
    shortDesc: 'Launch and Initial Deployment',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Officially launch VirtuWallet to the public, roll out initial versions for web, Android, and iOS platforms, gather feedback from early adopters, implement necessary updates and improvements based on user input, and initiate partnerships with exchanges and DeFi platforms for liquidity integration.</h1>
      </div>
    ),
    icon : <AiOutlineRobot className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    title: 'Phases 3',
    shortDesc: 'Expansion and Enhancements',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Expand VirtuWallet's features to include advanced security options like biometric authentication and hardware wallet integration, and introduce additional functionalities such as decentralized exchange (DEX) integration and support for non-fungible tokens (NFTs).</h1>
      </div>
    ),
    icon : <TbCloudComputing className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },
  {
    title: 'Phase 4',
    shortDesc: 'VirtuWallet Expansion',
    desc: (
      <div className="w-full flex flex-col gap-3">
      <h1 className="text-sm">Explore cross-chain compatibility, enhance user experience, and drive adoption through marketing campaigns and strategic partnerships while evaluating impact for future development.</h1>
      </div>
    ),
    icon : <MdAnimation  className="h-12 w-12 mb-4 dark:text-white text-black group-hover:text-white " />
  },


];

export const FeatureMenuItem = [
  {
    icon: <GrMultiple size={40} />,
    title: 'Multi-Network Support',
    desc: 'With VirtuWallet supporting multiple blockchain networks, including Ethereum, Bitcoin, and others, users can manage various types of crypto assets within a single interface worldwide.',
  },
  {
    icon: <FaNfcDirectional size={40} />,
    title: 'NFC Integration',
    desc: 'Our VirtuWallet seamlessly integrates Near Field Communication (NFC) technology, enabling users to conduct crypto transactions directly from their mobile devices by tapping them on NFC-enabled terminals.',
  },
  {
    icon: <BsFilePerson size={40} />,
    title: 'Security Measures',
    desc: 'And, VirtuWallet incorporates advanced security features such as biometric authentication, multi-signature wallets, and encryption protocols to ensure the safety of users assets and data.',
  },
]