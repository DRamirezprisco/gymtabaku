export interface ScheduleTimeEntry {
  time: string;
  label: string;
}

export interface ScheduleCardData {
  id: string;
  title: string;
  times: ScheduleTimeEntry[];
  note?: string;
}

export const SCHEDULES_DATA: ScheduleCardData[] = [
  {
    id: "lunes-viernes",
    title: "Lunes a Viernes",
    times: [
      { time: "05:30 AM", label: "Apertura" },
      { time: "09:45 PM", label: "Cierre" },
    ],
  },
  {
    id: "clases-grupales",
    title: "Clases Grupales",
    times: [
      { time: "07:00 PM", label: "Lunes - Clase Rumba" },
      { time: "07:00 PM", label: "Miércoles - Clase Zumba" },
    ],
  },
  {
    id: "sabados",
    title: "Sábados",
    times: [
      { time: "07:00 AM", label: "Apertura" },
      { time: "02:00 PM", label: "Cierre" },
    ],
  },
  {
    id: "domingos",
    title: "Domingo",
    times: [
      { time: "08:00 AM", label: "Apertura" },
      { time: "01:00 PM", label: "Cierre" },
    ],
  },
  {
    id: "festivos",
    title: "Festivos",
    times: [
      { time: "08:00 AM", label: "Apertura" },
      { time: "01:00 PM", label: "Cierre" },
    ],
  },
];
