import logo from './logo.png';
import { BsHouse, BsBagCheck, BsPerson, BsDoorOpen } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import "./Sidebar.css";
import ModalDialog from './ModalDialog';


const Sidebar = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 1, title: 'Home', icon: <BsHouse />, link: '/', subitem: [] },
    {
      id: 2, title: 'Pedidos', icon: <BsBagCheck />, link: '/pedidos', subitem: [
        { id: 21, title: 'Novo pedido', icon: <BsBagCheck />, link: '/novo-pedido' },
        { id: 22, title: 'Meus pedidos', icon: <BsBagCheck />, link: '/meus-pedidos' },
      ]
    },
    { id: 3, title: 'Conta', icon: <BsPerson />, link: '/conta', subitem: [] },
    { id: 4, title: 'Sair', icon: <BsDoorOpen />, link: '/login', subitem: [] },
  ];

  const titleCase = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  const url = window.location.href;
  let currentPage = url.split('/')[3];
  currentPage = currentPage ? titleCase(currentPage) : 'Home';

  const listItems = sidebarItems.map((sidebarItem) =>
    <li key={sidebarItem.id}>
      <a onClick={() => sidebarItem.title == 'Sair' ? navigate(sidebarItem.link) : navigate(sidebarItem.link)} className={currentPage == sidebarItem.title ? 'sidebar-item active' : 'sidebar-item'}>
        <span className="sidebar-item-icon">{sidebarItem.icon}</span>
        <span>{sidebarItem.title}</span>
      </a>
    </li>
  );

  return (
    <>
      <div id="sidebar">
        <a href="/" className="icon-logo">
          <img src={logo} className="logo-sidebar" />
        </a>
        <ul className="list-items">
          {listItems}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;