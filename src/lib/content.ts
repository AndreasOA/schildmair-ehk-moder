// Simple content loading helpers. In a real setup you might add caching or dynamic fetch.
import home from '../../content/pages/home.json';
import impressum from '../../content/pages/impressum.json';
import datenschutz from '../../content/pages/datenschutz.json';
import karriere from '../../content/pages/karriere.json';

export type HomeContent = typeof home;
export type ImpressumContent = typeof impressum;
export type DatenschutzContent = typeof datenschutz;
export type KarriereContent = typeof karriere;

export function getHome(): HomeContent { return home as HomeContent; }
export function getImpressum(): ImpressumContent { return impressum as ImpressumContent; }
export function getDatenschutz(): DatenschutzContent { return datenschutz as DatenschutzContent; }
export function getKarriere(): KarriereContent { return karriere as KarriereContent; }

// Provide map for dynamic access if needed
export const contentBySlug: Record<string, any> = {
  [home.slug || 'index']: home,
  [impressum.slug]: impressum,
  [datenschutz.slug]: datenschutz,
  [karriere.slug]: karriere
};
