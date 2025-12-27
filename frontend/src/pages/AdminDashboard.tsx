import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OacCard from '../components/Header/OacCard';
import api from '../api/axios'; 

// Интерфейс для данных (соответствует модели Django)
interface DataItem {
  id: number;
  [key: string]: any;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Пользователи');
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const menuItems = ['Пользователи', 'Роли', 'Объекты', 'Журнал действий'];

  // Функция для загрузки данных из Django
  const fetchData = async (tab: string) => {
  setLoading(true);
  setError(null);
  
  let endpoint = '';
  switch (tab) {
    case 'Пользователи': 
      endpoint = 'user/me/'; // Твой Django путь для получения данных юзера
      break;
    case 'Объекты': 
      endpoint = 'cards/';   // Твой Django путь для карточек (в urls.py включен как api/cards/)
      break;
    case 'Роли': 
    case 'Журнал действий':
      endpoint = 'cards/';   // Временно укажи cards, чтобы не было 404, пока не создашь эти разделы
      break;
    default: 
      endpoint = 'cards/';
  }
    try {
      const response = await api.get(endpoint);
      setData(response.data);
    } catch (err: any) {
      console.error(`Ошибка при загрузке ${tab}:`, err);
      setError(`Не удалось загрузить данные из Django (${tab}). Проверьте работу сервера и CORS.`);
      // В случае ошибки обнуляем данные, чтобы не висел старый список
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Вызываем загрузку при смене вкладки
  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const handleLogout = () => {
    // Здесь будет логика удаления токена (Django Knox/SimpleJWT)
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* HEADER */}
      <header className="bg-[#0f172a] text-white px-8 py-3 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="text-lg font-bold tracking-tight">
          OAC <span className="text-blue-400 text-sm ml-2 font-mono uppercase tracking-widest">Admin Panel</span>
        </div>
        <div className="flex gap-6 text-sm items-center">
          <Link to="/" className="text-slate-400 hover:text-white transition-colors">На сайт</Link>
          <button 
            onClick={handleLogout}
            className="bg-slate-800 hover:bg-red-900/40 px-3 py-1.5 rounded border border-slate-700 transition-all text-xs"
          >
            Выйти
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200 p-4 shrink-0 shadow-sm">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === item 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Состояние ошибки */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Контент вкладок */}
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-400 text-sm animate-pulse">Запрос к Django API...</p>
                </div>
              </div>
            ) : (
              <>
                {activeTab === 'Пользователи' && (
                  <OacCard 
                    title="Пользователи системы" 
                    buttonText="Создать аккаунт"
                    headers={['ID', 'Имя пользователя', 'Email', 'Роль']}
                    data={data}
                  />
                )}

                {activeTab === 'Роли' && (
                  <OacCard 
                    title="Настройка доступов" 
                    buttonText="Новая роль"
                    headers={['ID', 'Название роли', 'Уровень прав']}
                    data={data}
                  />
                )}

                {activeTab === 'Объекты' && (
                  <OacCard 
                    title="Торговые точки" 
                    buttonText="Добавить объект"
                    headers={['ID', 'Название', 'Адрес']}
                    data={data}
                  />
                )}

                {activeTab === 'Журнал действий' && (
                  <OacCard 
                    title="Аудит безопасности" 
                    buttonText="Экспорт (.json)"
                    headers={['ID', 'Дата', 'Пользователь', 'Действие']}
                    data={data}
                  />
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;