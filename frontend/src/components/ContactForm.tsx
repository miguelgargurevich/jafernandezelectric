import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useI18n } from "../i18n";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const getSchema = (t: any) => z.object({
  name: z.string().min(2, t.contact.validation.name),
  phone: z.string().min(7, t.contact.validation.phone),
  message: z.string().min(5, t.contact.validation.message),
  honey: z.string().max(0, ""), // honeypot invisible
});

type FormData = z.infer<ReturnType<typeof getSchema>>;


const ContactForm: React.FC = () => {
  const { t, lang } = useI18n();
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormData>({
    resolver: zodResolver(getSchema(t)),
  });

  const [status, setStatus] = React.useState<null | 'success' | 'error'>(null);
  const onSubmit = async (data: FormData) => {
    if (data.honey) return;
    setStatus(null);
    try {
      await fetch("https://formsubmit.co/ajax/contacto@gargurevich.dev", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          message: data.message
        })
      });
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center py-16 px-4 bg-primary dark:bg-white">
      {/* Botón de idioma solo en Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-8">{t.contact.title}</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 bg-white/5 dark:bg-primary/10 rounded-lg p-8 flex flex-col gap-4 shadow">
          <input {...register("name")}
            className="p-3 rounded bg-primary dark:bg-white border border-accent text-white dark:text-primary placeholder:text-white/60 dark:placeholder:text-primary/60 focus:outline-accent"
            placeholder={t.contact.name} />
          {errors.name && <span className="text-accent text-sm">{errors.name.message}</span>}
          <input {...register("phone")}
            className="p-3 rounded bg-primary dark:bg-white border border-accent text-white dark:text-primary placeholder:text-white/60 dark:placeholder:text-primary/60 focus:outline-accent"
            placeholder={t.contact.phone} />
          {errors.phone && <span className="text-accent text-sm">{errors.phone.message}</span>}
          <textarea {...register("message")}
            className="p-3 rounded bg-primary dark:bg-white border border-accent text-white dark:text-primary placeholder:text-white/60 dark:placeholder:text-primary/60 focus:outline-accent min-h-[100px]"
            placeholder={t.contact.message} />
          {errors.message && <span className="text-accent text-sm">{errors.message.message}</span>}
          {/* Honeypot anti-spam */}
          <input type="text" {...register("honey")}
            style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <button type="submit" disabled={isSubmitting} className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:opacity-90 transition mt-2 flex items-center gap-2">
            <PaperAirplaneIcon className="w-5 h-5 inline-block" aria-hidden="true" />
            <span>{isSubmitting ? t.contact.sending : t.contact.send}</span>
          </button>
          {status === 'success' && (
            <div className="mt-4 p-3 rounded bg-green-100 text-green-800 border border-green-300 text-sm text-center animate-fade-in">
              {t.contact.success}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-3 rounded bg-red-100 text-red-800 border border-red-300 text-sm text-center animate-fade-in">
              {t.contact.error}
            </div>
          )}
        </form>
        <div className="flex-1 w-full h-[350px] rounded-lg overflow-hidden shadow">
          <iframe
            title="Mapa 47 Robert Ave Massapequa NY 11758"
            src="https://www.google.com/maps?q=47+Robert+Ave,+Massapequa,+NY+11758,+USA&z=10&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
