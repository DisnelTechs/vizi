import { DrupalMenu, DrupalSiteMenus } from "./drupal";

export interface GlobalElements {
  menus: DrupalSiteMenus;
}

type EntityType =
  | "empresa"
  | "veterinario"
  | "publicidad"
  | "blog"
  | "anuncio"
  | "solicitud"
  | "oferta"
  | "recurso";

export interface EntityProps {
  type: EntityType;
  href?: string;
  title: string;
  imageSrc?: string;
  sector?: string;
  category?: string;
  specialty?: string;
  description?: string;
  date?: string;
  address?: {
    langcode: string;
    country_code: string;
    administrative_area: string;
    locality: string;
  };
  salary?: string;
  available?: string;
  trabajar_en?: string;
  tipo_empleo?: string;
  show_tag?: boolean;
}

export interface CardsGridProps {
  nodes: EntityProps[];
  nCols?: number;
}
