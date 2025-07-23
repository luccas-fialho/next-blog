import { format, formatDistanceToNow } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

export const formatDatetime = (rawDate: string): string => {
  const date = new Date(rawDate);
  return format(date, "MM/dd/yyyy 'at' hh':'mmaaa", {
    locale: ptBR,
  });
};

export const formatRelativeDatetime = (rawDate: string): string => {
  const date = new Date(rawDate);
  return formatDistanceToNow(date, {
    locale: enUS,
    addSuffix: true,
    includeSeconds: true,
  });
};

const rawDate = "2025-07-23T12:47:32.386Z";
console.log(formatRelativeDatetime(rawDate));
