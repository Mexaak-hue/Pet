import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="text-2xl font-bold tracking-tight text-slate-800">OAC</div>
    <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
        <a href="#" className="hover:text-blue-600 transition-colors">Главная</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Возможности</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Тарифы</a>
        <a href="#" className="hover:text-blue-600 transition-colors">О продукте</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Контакты</a>
      <Link to="/login">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm cursor-pointer">
           Войти
        </button>
       </Link>

    </nav>
  </header>
  );
}
