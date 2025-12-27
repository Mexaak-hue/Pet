import { Link } from 'react-router-dom';
interface HeaderProps {
  userRole?: string; 
}

export default function Header({ userRole }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold tracking-tight text-slate-800">OAC</div>
        {/* Если роль передана (мы в панели), показываем её рядом с логотипом */}
        {userRole && (
          <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-semibold uppercase">
            {userRole}
          </span>
        )}
      </div>

      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
        {/* Показываем ссылки навигации, только если пользователь НЕ залогинен (нет роли) */}
        {!userRole && (
          <>
            <a href="#" className="hover:text-blue-600 transition-colors">Главная</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Возможности</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Тарифы</a>
            <a href="#" className="hover:text-blue-600 transition-colors">О продукте</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Контакты</a>
          </>
        )}

        {/* Если роли нет — кнопка Войти, если есть — кнопка Выйти */}
        {!userRole ? (
          <Link to="/login">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-sm cursor-pointer">
              Войти
            </button>
          </Link>
        ) : (
          <button 
            onClick={() => {
            
              window.location.href = '/login';
            }}
            className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          >
            Выйти
          </button>
        )}
      </nav>
    </header>
  );
}