import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import Header from '../components/Header/Header';
import Container from '../components/Header/Container';
import Section from '../components/Main/Section';

const UserDashboard: React.FC = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    api.get('cards/')
      .then(res => setObjects(res.data))
      .catch(err => console.error("Ошибка загрузки данных", err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header userRole="Пользователь" />
      <Container>
        <div className="py-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-6">Мои Объекты</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objects.map((obj: any) => (
              <div key={obj.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-lg text-slate-800">{obj.name}</h3>
                <p className="text-slate-500 text-sm mt-2">{obj.address}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded">Активен</span>
                  <button className="text-blue-600 text-sm font-semibold">Подробнее →</button>
                </div>
              </div>
            ))}
          </div>
          
          {objects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400">У вас пока нет назначенных объектов</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default UserDashboard;