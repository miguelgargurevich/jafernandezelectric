import { useEffect } from "react";
import { useI18n } from "../i18n";

/**
 * Cambia el atributo lang del <html> según el idioma seleccionado
 */
export default function HtmlLangEffect() {
  const { lang } = useI18n();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
