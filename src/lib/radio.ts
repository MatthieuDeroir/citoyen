/** Webradios Chante France (flux mp3 Infomaniak ouverts, 128 kbps). */

export interface RadioStation {
  id: string;
  label: string;
  title: string;
  host: string;
  mount: string;
}

export const RADIO_STATIONS: RadioStation[] = [
  {
    id: "cf",
    label: "Généraliste",
    title: "Chante France",
    host: "chantefrance.ice.infomaniak.ch",
    mount: "chantefrance-128.mp3",
  },
  {
    id: "cf60",
    label: "60's",
    title: "Chante France 60's",
    host: "chantefrance60s.ice.infomaniak.ch",
    mount: "chantefrance60s-128.mp3",
  },
  {
    id: "cf70",
    label: "70's",
    title: "Chante France 70's",
    host: "chantefrance70s.ice.infomaniak.ch",
    mount: "chantefrance70s-128.mp3",
  },
  {
    id: "cf80",
    label: "80's",
    title: "Chante France 80's",
    host: "chantefrance80s.ice.infomaniak.ch",
    mount: "chantefrance80s-128.mp3",
  },
  {
    id: "cf90",
    label: "90-2000",
    title: "Chante France 90-2000's",
    host: "chantefrance.ice.infomaniak.ch",
    mount: "chantefrance90-2000-128.mp3",
  },
];

export function radioUrl(s: RadioStation): string {
  return `https://${s.host}/${s.mount}`;
}

export function getStation(id: string): RadioStation | undefined {
  return RADIO_STATIONS.find((s) => s.id === id);
}
