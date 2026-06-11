'use client';

import { motion } from 'framer-motion';
import {
  Users, FileText, Wallet, ScanLine, Landmark, CalendarClock,
} from 'lucide-react';

const SERVICES = [
  {
    n: '01', icon: Users,
    title: 'Мульти-клиент кабинет',
    sub: 'Все клиенты — ИП и ТОО — в одном окне.',
    detail: 'Список клиентов с дедлайнами и статусами по каждому. Переключение между клиентами в один клик — без отдельных входов в кабинет КГД и без десятка таблиц Excel.',
  },
  {
    n: '02', icon: FileText,
    title: 'Формы 910 / 200 / 300',
    sub: 'Считаются автоматически, выгрузка в ИСНА.',
    detail: 'Налоговые формы формируются из данных клиента по актуальным схемам КГД. Готовую выгрузку в формате ИСНА загружаете и подписываете своей ЭЦП.',
  },
  {
    n: '03', icon: Wallet,
    title: 'Зарплаты и соцплатежи',
    sub: 'ИПН, ОПВ, ОПВР, СО, ВОСМС, ООСМС, соцналог.',
    detail: 'Расчёт зарплаты и всех обязательных удержаний по сотрудникам каждого клиента под правила 2026 года. Готовые суммы — сразу в форму 200.',
  },
  {
    n: '04', icon: ScanLine,
    title: 'Распознавание чеков',
    sub: 'OCR: фото чека → проводка.',
    detail: 'Сфотографировали чек — система распознаёт сумму, дату и контрагента и заводит проводку. Меньше ручного ввода первички, меньше ошибок.',
  },
  {
    n: '05', icon: Landmark,
    title: 'Импорт выписок Kaspi',
    sub: 'Загрузка выписки — авто-разнесение.',
    detail: 'Импортируете банковскую выписку — операции автоматически разносятся по статьям. Сверка движений по счёту занимает минуты вместо часов.',
  },
  {
    n: '06', icon: CalendarClock,
    title: 'Календарь дедлайнов',
    sub: 'Все сроки по всем клиентам.',
    detail: 'Единый календарь сдачи: какая форма по какому клиенту и когда. Напоминания о приближающихся дедлайнах — ни один срок не теряется в сезон.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Возможности
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Всё для ведения клиентов — <span className="text-navy/40">в одном инструменте.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            От расчёта форм до распознавания чеков. Esep закрывает рутину,
            которая раньше съедала вечера в отчётный сезон.
          </p>
        </motion.div>

        {/* Grid карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative p-6 rounded-3xl bg-white border border-navy-100 hover:border-navy-200 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-sky-50/0 group-hover:from-sky-50/40 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-navy/30 tracking-wider">{s.n}</span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-100 transition-all">
                    <Icon className="w-5 h-5 text-sky-600" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-navy/60 mb-4 leading-relaxed">{s.sub}</p>
                  <p className="text-xs text-navy/50 leading-relaxed">{s.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
