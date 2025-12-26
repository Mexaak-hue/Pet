import React from 'react';
import Section from './Section';

interface Feature {
  title: string;
  description: string;
  badge: string;
}

const features: Feature[] = [
  { 
    badge: "Управление пользователями", 
    title: "Пользователи и доступы", 
    description: "Создание пользователей, назначение ролей, группы и права доступа." 
  },
  { 
    badge: "Ролевой доступ", 
    title: "Ролевой доступ", 
    description: "Гибкая модель ролей и прав для разных типов сотрудников и объектов." 
  },
  { 
    badge: "Журнал действий", 
    title: "Журнал", 
    description: "История событий и аудита для отслеживания вмешательств и изменений." 
  },
  { 
    badge: "Объекты и зоны", 
    title: "Объекты", 
    description: "Управление объектами (магазины, склады), зонами доступа и картами объектов." 
  },
];

const Main: React.FC = () => {
  return (
    <main className="grow">
      {/* Hero Секция */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center py-8">
          <div>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Operational Access Control
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Система управления доступами и ролями сотрудников для торговых объектов и сервисов.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Попробовать демо
              </button>
              <button className="border border-slate-200 text-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-all">
                Запросить доступ
              </button>
            </div>
          </div>
          <div className="bg-slate-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-slate-200">
            <span className="text-slate-400 font-medium italic">[Demo UI / Illustration]</span>
          </div>
        </div>
      </Section>

      {/* Секция Возможности */}
      <Section title="Возможности платформы" id="features" className="bg-slate-50 border-y border-slate-100">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-32 bg-slate-50 rounded-lg mb-6 flex items-center justify-center border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center px-4">
                  {item.title}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.badge}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Секция "Как это работает" */}
      <Section title="Как это работает" id="about">
        <div className="max-w-2xl">
          <ul className="space-y-6">
            {[
              "Добавьте объект и сотрудников",
              "Назначьте роли и права",
              "Контролируйте и анализируйте журнал"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-700">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      
    </main>
  );
};

export default Main;