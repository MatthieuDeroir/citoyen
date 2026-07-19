/**
 * Pool d'ambiance sonore française : extraits 30 s des grands classiques de la
 * chanson via l'API publique Deezer (les enregistrements complets sont sous
 * droits et ne peuvent pas être embarqués). ~100 titres, tirés au hasard.
 */

const ARTISTS = [
  "Édith Piaf",
  "Jacques Brel",
  "Georges Brassens",
  "Charles Aznavour",
  "Charles Trenet",
  "Yves Montand",
  "Barbara",
  "Dalida",
  "Serge Gainsbourg",
  "Léo Ferré",
  "Gilbert Bécaud",
  "Joe Dassin",
  "Michel Sardou",
  "France Gall",
  "Françoise Hardy",
  "Claude François",
];

const PER_ARTIST = 7;

export interface AmbianceTrack {
  id: number;
  title: string;
  artist: string;
  preview: string;
  cover: string;
}

interface DeezerArtistSearch {
  data?: { id: number; name: string }[];
}

interface DeezerTopTracks {
  data?: {
    id: number;
    title: string;
    preview?: string;
    album?: { cover_medium?: string };
  }[];
}

/** ~100 extraits (7 par artiste), mis en cache côté serveur pour 24 h. */
export async function getAmbianceTracks(): Promise<AmbianceTrack[]> {
  const perArtist = await Promise.all(
    ARTISTS.map(async (name): Promise<AmbianceTrack[]> => {
      try {
        const search = (await fetch(
          `https://api.deezer.com/search/artist?q=${encodeURIComponent(name)}&limit=1`,
          { next: { revalidate: 86_400 } },
        ).then((r) => r.json())) as DeezerArtistSearch;
        const artistId = search.data?.[0]?.id;
        if (!artistId) return [];

        const top = (await fetch(
          `https://api.deezer.com/artist/${artistId}/top?limit=${PER_ARTIST}`,
          { next: { revalidate: 86_400 } },
        ).then((r) => r.json())) as DeezerTopTracks;

        return (top.data ?? [])
          .filter((t) => t.preview)
          .map((t) => ({
            id: t.id,
            title: t.title,
            artist: name,
            preview: t.preview!,
            cover: t.album?.cover_medium ?? "",
          }));
      } catch {
        return []; // API indisponible : l'ambiance est simplement masquée
      }
    }),
  );
  return perArtist.flat();
}
