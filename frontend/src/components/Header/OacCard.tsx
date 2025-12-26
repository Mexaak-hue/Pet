import React from 'react';

// 1. Описываем интерфейс (строго следим за именами)
interface OacCardProps {
  title: string;
  buttonText: string;
  headers: string[];
  data: any[];
}

const OacCard: React.FC<OacCardProps> = ({ title, buttonText, headers, data }) => {
  return (
    <div className="bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden mb-8">
      {/* Шапка карточки */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        <button className="bg-[#2563eb] hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors">
          + {buttonText}
        </button>
      </div>

      {/* Таблица */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#fcfcfc] border-b border-slate-100">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {h}
                </th>
              ))}
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                {Object.values(row).map((val: any, j) => (
                  <td key={j} className="px-4 py-4 text-sm text-slate-600">{val}</td>
                ))}
                <td className="px-4 py-4 text-right">
                  <button className="bg-[#2563eb] text-white px-3 py-1 rounded text-[10px] font-bold hover:bg-blue-700 transition-colors">
                    Ред.
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OacCard;