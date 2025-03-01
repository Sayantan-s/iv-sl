import { format, parseISO } from "date-fns";

export function formatDate(dateString: string) {
  const date = parseISO(dateString);
  return format(date, "do MMM, yyyy");
}
