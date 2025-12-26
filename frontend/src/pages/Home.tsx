import Header from "../components/Header/Header";
import Container from "../components/Header/Container";
import Section from "../components/Main/Section";


export default function Home() {
  return (
    <div className="selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <main>
        {/* ГЛАВНАЯ ЧАСТЬ (HERO SECTION) */}
      <Section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">
          {/* Левая часть: Текст и кнопки */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Operational Access Control
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              Система управления доступами и ролями сотрудников для торговых объектов и сервисов.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-all shadow-sm">
                Попробовать демо
              </button>
              <button className="bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-md font-semibold hover:bg-slate-50 transition-all shadow-sm">
                Запросить доступ
              </button>
            </div>
          </div>

          {/* Правая часть: Заглушка под картинку */}
          <div className="flex-1 w-full max-w-137.5">
            <div className="bg-[#e5e7eb] rounded-lg aspect-16/10 flex items-center justify-center border border-slate-200 shadow-inner">
              <span className="text-slate-500 font-medium text-lg tracking-wide">
                [Demo UI / Illustration]
              </span>
            </div>
          </div>
        </div>
      </Section>
        <Container children={undefined} />
        {/* Секция "Как это работает" */}
        <section className="px-12 py-20 max-w-7xl mx-auto border-t border-slate-100">
          <h2 className="text-3xl font-bold mb-8">Как это работает</h2>
          <ol className="space-y-4 text-slate-600">
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 text-lg">1.</span> 
              Добавьте объект и сотрудников
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 text-lg">2.</span> 
              Назначьте роли и права
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 text-lg">3.</span> 
              Контролируйте и анализируйте журнал
            </li>
          </ol>
        </section>

        {/* Форма связи */}
        <section className="px-12 py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Связаться с OAC</h2>
            <p className="text-slate-500 mb-10">Оставьте заявку — мы подготовим демо и подберем оптимальный тариф.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <input type="text" placeholder="Имя" className="px-4 py-3 rounded-lg border border-slate-200 w-full md:w-48 focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-slate-200 w-full md:w-48 focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="tel" placeholder="Телефон" className="px-4 py-3 rounded-lg border border-slate-200 w-full md:w-48 focus:ring-2 focus:ring-blue-500 outline-none" />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">Отправить заявку</button>
            </div>
          </div>
        </section>
      </main>
    </div>
    
  );
}
