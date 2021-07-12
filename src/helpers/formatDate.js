import { format } from "date-fns";
import { tr } from "date-fns/locale";

export const formatDate = (date, formatStr = "P pp") => {
  return format(date, formatStr, {
    locale: tr,
  });
};
