import { useEffect, useState } from "react";

export function useDate() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    let isMounted = true;

    const updateDate = () => {
      if (!isMounted) {
        return;
      }

      setDate(new Date());

      // We don't need the full up to date granularity that Date provides. Only refresh once a minute.
      setTimeout(updateDate, 60000);
    };

    updateDate();

    return () => {
      isMounted = false;
    };
  }, []);

  return date;
}
