import React from 'react';
import { Link } from 'react-router-dom';
import OacCard from '../components/Header/OacCard';

const UserDashboard: React.FC = () => {
  // Только те вкладки, которые нужны обычному пользователю
  const menuItems = ['Журнал действий', 'Вакансии'];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Навбар пользователя */}
      <header className="bg-[#0f172a] text-white px-8 py-3 flex justify-between items-center shadow-md">
        <div className="text-lg font-bold flex items-center gap-2">
          <span className="text-blue-400">OAC</span> 
          <span className="text-slate-400 text-sm font-light">| Личный кабинет</span>
        </div>
        <div className="flex gap-6 text-sm text-slate-300">
          <Link to="/" className="hover:text-white transition-colors">На сайт</Link>
          <button className="hover:text-white transition-colors">Выйти</button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Сайдбар */}
        <aside className="w-64 bg-white border-r border-slate-200 p-4 hidden md:block shrink-0">
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  index === 0 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Контент пользователя */}
        <main className="flex-1 p-8 space-y-8 overflow-y-auto">
          <h1 className="text-2xl font-bold text-slate-800 mb-6">Добро пожаловать!</h1>

          {/* Секция Журнал */}
          <OacCard 
            title="Ваш журнал действий" 
            buttonText="Скачать отчет"
            headers={['Дата', 'Событие', 'Статус']}
            data={[
              { date: '2025-12-25 10:00', event: 'Вход в систему', status: 'Успешно' },
              { date: '2025-12-24 18:30', event: 'Запрос доступа к Зоне 1', status: 'Отклонено' },
            ]}
          />

          {/* Секция Вакансии */}
          <OacCard 
            title="Доступные вакансии" 
            buttonText="Откликнуться"
            headers={['Должность', 'Объект', 'Зарплата']}
            data={[
              { role: 'Администратор зала', object: 'ТЦ "Метро"', salary: '65 000 руб.' },
              { role: 'Специалист контроля', object: 'Склад №3', salary: '55 000 руб.' },
            ]}
          />

          <footer className="text-center py-10 text-slate-400 text-[10px] uppercase tracking-widest">
            Личный кабинет сотрудника OAC
          </footer>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;