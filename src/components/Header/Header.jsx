import "./Header.scss";

import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { useState , useRef } from "react";
import { useTranslation } from "react-i18next";
import Modal from 'react-modal';
import i18n from "../../i18n";

// images
import logo from "../../assets/logo.jpg";
import menu from "../../assets/menu-bar.png";
import darkmode from "../../assets/night-light.svg";


export default function Header() {

    const { t } = useTranslation()

    const changeLang = (evt) => {
        i18n.changeLanguage(evt)
    }

    

    const menuRef = useRef();

    // const [modal, setModal] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);

    // menu
    const showMenu = () => {
        menuRef.current.classList.add("header__menu");
    }
    const closeMenu = () => {
        menuRef.current.classList.remove("header__menu");
    }

    // modal
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="header py-4  bg-slate-500 w-[100%] z-1">
                <div className="container">
                    <div className=" flex justify-between items-center">
                        <Link to={'/'}><img className="header__image rounded-lg block bg-transparent" src={logo} width={200} alt="logo" /></Link>
                        <ul  className="header__list flex">
                            <li className="mr-10"><Link className=" text-white font-bold  group-hover:bg-white " href="#cars">{t("headerTitle1")}</Link></li>
                            <li className="mr-10"><Link className="text-white font-bold"  to={"/dillers"}>{t("headerTitle2")}</Link></li>
                            <li className=""><Link className="text-white font-bold" to={"/products"}>{t("headerTitle3")}</Link></li>
                        </ul>
                        <menu ref={menuRef}  className="hidden">
                            <div className="mt-10 ml-10">
                            <li className="mr-10"><Link className=" text-black font-bold  group-hover:bg-white border-black border-2 border-solid p-2 mb-4" href="#cars">Qurilish maxsulotlari</Link></li>
                            <li className="mr-10"><Link className="text-black font-bold border-black border-2 border-solid p-2 mb-4" href="/dilers">Maktab jixozlari</Link></li>
                            <li className=""><Link className="text-black font-bold border-black border-2 border-solid p-2" href="/vehicles">Uy jixozlari</Link></li>
                            </div>
                            <button onClick={() => closeMenu()} className="p-2 border-2 border-solid border-black flex h-12 font-bold mr-2 mt-2">X</button>
                        </menu>
                        <div className=" flex items-center">
                            <button onClick={() => showMenu()}  className="header__burger mr-6">
                                <img className="bg-white rounded-lg" src={menu} width={35} height={35} alt="" />
                            </button>
                            {/* <button >
                                <img className="mr-4" src={darkmode} width={35} height={35}  alt="darkmode" />
                            </button> */}
                            <select defaultValue={i18n.language} onChange={(evt) => changeLang(evt.target.value)} className="header__select border-solid border-2 border-white-600 mr-8 rounded-lg bg-transparent font-bold text-white p-2 cursor-pointer">
                                <option className="text-black" value="uz">uz</option>
                                <option className="text-black" value="ru">ru</option>
                                <option className="text-black" value="en">en</option>
                            </select>
                            <button onClick={openModal}>
                                <div className="flex border-solid border-2 border-white-600 p-2 rounded-lg bg-transparent font-bold text-white cursor-pointer">
                                    <IoEnterOutline className="w-5 h-5 mr-2 mt-1" width={20} height={20} /><span>Kirish</span>
                                </div>
                            </button>
                            {/* <dialog open={modal}>Modal</dialog> */}
                            <Modal
                                isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
                                }}>
                                <div className="w-64">
                                    <div className="flex">
                                    <h1 className="font-bold text-center mb-2 text-lg">Tasdiqlash codini kiriting</h1> 
                                    <button className="border-solid border-black border-2 px-1 rounded-lg ml-6 mb-4 " onClick={() => closeModal()} >X</button>
                                    </div>
                                    <hr />
                                    <label className="text-black line-through" htmlFor="">{"IHHN5456WSDW"}</label>
                                    <input className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                    <a className="text-blue-400 underline mt-3 mb-3 block" href=""><input className="mr-2" type="checkbox" />Men shaxsiy ma'lumotlarimni uzatishga roziman</a>
                                    <hr />
                                    <button className="mt-5 ml-12 p-2 bg-blue-400 text-white">Tasdiqlash codini yuboring</button>
                                    <button className="text-black mt-4 ml-32 border-solid border-2 border-gray-500 p-1">Kodni yangilash</button>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}