```react
import React, { useState } from 'react';
import { 
  Search, MapPin, Briefcase, Filter, Bell, User, 
  Menu, Star, Clock, TrendingUp, ChevronRight,
  Globe, Zap, Shield, Bookmark
} from 'lucide-react';

// --- КОМПОНЕНТЫ ВНУТРИ ФАЙЛА (Чтобы не было ошибок импорта) ---

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-[#0052FF] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
        <Briefcase className="text-white w-6 h-6" />
      </div>
      <span className="text-xl font-black tracking-tighter text-gray-900 italic">ZHUMYS<span className="text-[#0052FF]">.JOB</span></span>
    </div>
    
    <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
      <a href="#" className="text-[#0052FF]">Поиск</a>
      <a href="#" className="hover:text-[#0052FF] transition-all">Компании</a>
      <a href="#" className="hover:text-[#0052FF] transition-all">Зарплаты</a>
    </nav>

    <div className="flex items-center gap-4">
      <button className="p-2 text-gray-400 hover:text-[#0052FF] transition-colors"><Bell className="w-5 h-5" /></button>
      <div className="h-6 w-px bg-gray-200 mx-2"></div>
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-[#0052FF] transition-all shadow-md">
        <User className="w-4 h-4" />
        <span>Войти</span>
      </button>
    </div>
  </header>
);

const JobCard = ({ title, company, location, salary, tags, time, hot }: any) => (
  <div className="p-6 bg-white border border-gray-100 rounded-3xl hover:border-[#0052FF] hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer group relative overflow-hidden">
    {hot && <div className="absolute top-0 right-0 bg-[#0052FF] text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase">Premium</div>}
    
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-5">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-2xl font-black text-[#0052FF] group-hover:scale-110 transition-transform duration-500">
          {company[0]}
        </div>
        <div>
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#0052FF] transition-colors mb-1">{title}</h3>
          <p className="text-sm font-bold text-gray-400 flex items-center gap-1 uppercase tracking-tighter">
            <Globe className="w-3 h-3 text-blue-400" /> {company}
          </p>
        </div>
      </div>
      <button className="p-2 text-gray-200 hover:text-yellow-400 hover:bg-yellow-50 rounded-xl transition-all">
        <Bookmark className="w-5 h-5" />
      </button>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag: string) => (
        <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[10px] font-black rounded-lg border border-gray-100 uppercase tracking-widest group-hover:bg-blue-50 group-hover:text-[#0052FF] transition-colors">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
      <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-tighter">
        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#0052FF]" /> {location}</span>
        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#0052FF]" /> {time}</span>
      </div>
      <span className="font-black text-gray-900 text-xl">{salary}</span>
    </div>
  </div>
);

export default function App() {
  const jobs = [
    {
      title: "Senior Product Designer",
      company: "Kolesa Group",
      location: "Алматы",
      salary: "900,000 ₸",
      tags: ["Remote", "UI/UX", "Senior"],
      time: "1 ч. назад",
      hot: true
    },
    {
      title: "React Developer",
      company: "Kaspi.kz",
      location: "Астана",
      salary: "1,100,000 ₸",
      tags: ["TypeScript", "React", "FinTech"],
      time: "3 ч. назад",
      hot: false
    },
    {
      title: "Back-end Engineer",
      company: "Choco Family",
      location: "Удаленно",
      salary: "850,000 ₸",
      tags: ["Go", "Microservices", "Full-time"],
      time: "Вчера",
      hot: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFEFF] font-sans selection:bg-blue-100 selection:text-[#0052FF]">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* HERO SECTION */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/30 blur-[150px] -z-10 rounded-full"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-[#0052FF] text-[10px] font-black mb-8 border border-blue-100 tracking-[0.2em] uppercase">
            🚀 Твой путь к успеху начинается здесь
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-gray-900">
            НАЙДИ СВОЮ <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-indigo-600">ZHUMYS</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl mx-auto mb-14 font-medium italic">
            Лучшие вакансии Казахстана в одном месте. Просто начни поиск.
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-4xl mx-auto bg-white p-3 rounded-[35px] shadow-[0_20px_70px_rgba(0,82,255,0.15)] border border-gray-100 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center gap-4 px-6 py-4">
              <Search className="text-[#0052FF] w-6 h-6" />
              <input 
                type="text" 
                placeholder="Должность, теги или компания..." 
                className="w-full bg-transparent outline-none text-lg font-bold placeholder:text-gray-300"
              />
            </div>
            <div className="w-px bg-gray-100 my-3 hidden md:block"></div>
            <div className="flex items-center gap-4 px-6 py-4 md:w-56">
              <MapPin className="text-[#0052FF] w-6 h-6" />
              <select className="bg-transparent outline-none text-sm font-black text-gray-700 w-full uppercase tracking-widest cursor-pointer">
                <option>Казахстан</option>
                <option>Алматы</option>
                <option>Астана</option>
              </select>
            </div>
            <button className="bg-[#0052FF] hover:bg-blue-700 text-white px-12 py-5 rounded-[28px] font-black text-lg transition-all active:scale-95 shadow-lg shadow-blue-500/40 flex items-center justify-center gap-2">
              ПОИСК
              <Zap className="w-5 h-5 fill-white" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 space-y-10">
            <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-gray-400">Фильтры</h4>
              <div className="space-y-6">
                {["Удаленно", "Полный день", "Проектная", "Стажировка"].map(f => (
                  <label key={f} className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-6 h-6 border-2 border-gray-200 rounded-xl group-hover:border-[#0052FF] transition-all flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-[#0052FF] rounded-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                    <span className="text-sm font-black text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-tight">{f}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-8">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black tracking-tighter italic">ТОП ВАКАНСИИ</h2>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-gray-50 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-gray-100">Сначала новые</button>
                <button className="px-6 py-2 bg-gray-50 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-gray-100">По зарплате</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job, idx) => (
                <JobCard key={idx} {...job} />
              ))}
            </div>

            <button className="w-full py-10 border-4 border-dotted border-gray-100 rounded-[40px] text-gray-300 font-black text-sm uppercase tracking-[0.3em] hover:border-blue-100 hover:text-[#0052FF] hover:bg-blue-50/30 transition-all active:scale-[0.98]">
              Показать еще предложения
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

```