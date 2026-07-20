import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><section className="glass-card not-found-card" aria-labelledby="not-found-title"><span className="not-found-code">404</span><h1 id="not-found-title">Страница не найдена</h1><p>Возможно, адрес изменился или в ссылке есть ошибка. Вернитесь на главную страницу с уроками грузинского языка.</p><Link className="button primary" href="/"><ArrowLeft aria-hidden="true" />На главную</Link></section></main>;
}
