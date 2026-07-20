"use client";

import { LoaderCircle, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form); const next: Record<string, string> = {};
    if (!String(data.get("Имя") || "").trim()) next.name = "Пожалуйста, укажите имя.";
    if (!String(data.get("Контакт") || "").trim()) next.contact = "Укажите телефон, Telegram или WhatsApp.";
    if (!data.get("Согласие")) next.consent = "Нужно подтвердить согласие на обработку данных.";
    setErrors(next); return Object.keys(next).length === 0;
  };
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget;
    if (!validate(form)) { setStatus("idle"); return; }
    setStatus("loading");
    const data = new FormData(form);
    data.append("_subject", "Новая заявка с сайта — уроки грузинского"); data.append("_template", "table"); data.append("_captcha", "false"); data.append("_url", window.location.href);
    try {
      const response = await fetch("https://formsubmit.co/ajax/K.beridze1982@gmail.com", { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("request failed");
      form.reset(); setErrors({}); setStatus("success");
    } catch { setStatus("error"); }
  }
  return <div className="form-shell">
    <form onSubmit={submit} noValidate aria-describedby="form-note">
      <div className="form-grid">
        <label>Имя <span>*</span><input name="Имя" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <small id="name-error" className="field-error">{errors.name}</small>}</label>
        <label>Телефон или Telegram/WhatsApp <span>*</span><input name="Контакт" autoComplete="tel" aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "contact-error" : undefined} />{errors.contact && <small id="contact-error" className="field-error">{errors.contact}</small>}</label>
        <label>Возраст ученика <em>необязательно</em><input name="Возраст ученика" inputMode="numeric" /></label>
        <label>Текущий уровень<select name="Текущий уровень" defaultValue="Начинаю с нуля"><option>Начинаю с нуля</option><option>Знаю несколько слов</option><option>Уже изучал(а)</option><option>Не уверен(а)</option></select></label>
        <label>Предпочтительный формат<select name="Предпочтительный формат" defaultValue="Не уверен(а)"><option>Индивидуально</option><option>Мини-группа</option><option>Онлайн</option><option>Не уверен(а)</option></select></label>
        <label>Удобное время<select name="Удобное время" defaultValue="Обсудить лично"><option>Утро</option><option>День</option><option>Вечер</option><option>Обсудить лично</option></select></label>
      </div>
      <label>Комментарий <em>необязательно</em><textarea name="Комментарий" rows={4} placeholder="Расскажите, для кого занятия и чего хотелось бы достичь" /></label>
      <label className="honeypot" aria-hidden="true">Не заполнять<input name="_honey" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input type="checkbox" name="Согласие" value="Получено" aria-invalid={!!errors.consent} /><span>Соглашаюсь на использование указанных данных только для ответа на заявку. <b>*</b></span></label>
      {errors.consent && <small className="field-error block">{errors.consent}</small>}
      <button className="button primary submit" type="submit" data-cta="form-submit" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin" aria-hidden="true" />Отправляем…</> : <><Send aria-hidden="true" />Узнать о свободных местах</>}</button>
      <p id="form-note" className="privacy-note">Данные не публикуются и используются только для связи по поводу занятий.</p>
      <div className={`form-status ${status}`} role="status" aria-live="polite">{status === "success" && "Спасибо! Заявка отправлена. Кристина свяжется с вами, чтобы обсудить свободные места и удобное время."}{status === "error" && <>Не удалось отправить заявку. Попробуйте ещё раз или <a href="https://wa.me/995571010750" target="_blank" rel="noreferrer">напишите Кристине в WhatsApp</a>.</>}</div>
    </form>
    <a className="whatsapp-fallback" href="https://wa.me/995571010750" target="_blank" rel="me noreferrer" data-cta="whatsapp"><MessageCircle aria-hidden="true" /><span><strong>Удобнее в сообщениях?</strong>Написать Кристине в WhatsApp</span></a>
  </div>;
}
