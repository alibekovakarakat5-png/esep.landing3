'use client';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-accent-green flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">Esep</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                  Для бухгалтерских фирм
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Облачный кабинет бухгалтера под Налоговый кодекс 2026. Все
              клиенты вашей фирмы — ИП и ТОО — в одном окне. Формы 910, 200,
              300 — автоматически в формат ИСНА.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-4">
              Продукт
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#cabinet" className="hover:text-white transition-colors">Мульти-кабинет</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Как начать</a></li>
              <li><a href="#partnership" className="hover:text-white transition-colors">Партнёрство</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-4">
              Связаться
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+77059914789"
                  className="hover:text-white transition-colors font-semibold"
                >
                  +7 705 991 47 89
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/77059914789?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20Esep%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9%20%D1%84%D0%B8%D1%80%D0%BC%D1%8B."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-white transition-colors">
                  Записаться на демо
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-xs text-white/30">
              © 2026 ТОО «Ибрагимова К.М» · БИН 241040036923 · Все права защищены.
            </p>
            <p className="text-xs text-white/30">
              Соответствие Закону РК № 214-VIII от 18.07.2025 (НК 2026)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
