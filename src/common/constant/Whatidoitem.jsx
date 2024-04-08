import { AiFillControl, AiOutlineSlack, AiOutlineTeam, AiTwotoneControl } from "react-icons/ai";


const size = 40

export const Whatidoitem = [
    {
        title: 'User Interface',
        desc: 'We offer a variety of pre-designed templates to enhance your project management, providing ready-to-use solutions.',
        icon: <AiFillControl size={size} className="text-black" />,
    },
    {
        title: 'User Experience',
        desc: 'We have a selection of ready-made templates designed to enhance your project management, available for immediate use.',
        icon: <AiOutlineTeam size={size} className="text-black" />,
    },
    {
        title: 'Web Design',
        desc: 'I design user-centric websites that enhance your brand and drive business goals. Clean typography and minimal layouts has my full attention to create a compelling online presence.',
        icon: <AiTwotoneControl size={size} className="text-black" />,
    },
    {
        title: 'Branding',
        desc: 'Beyond web experiences, I provide essential visual identity services, including logo design, brand guidelines, and a personalized color palette –so you can represent your true self.',
        
        icon: <AiOutlineSlack size={size} className="text-black" />,
    },
]