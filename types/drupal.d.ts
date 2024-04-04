import {
  DrupalMedia,
  DrupalNode,
  DrupalParagraph,
  DrupalTaxonomyTerm,
  JsonApiResource,
} from "next-drupal";

export interface DrupalResource {
  data: {
    type: string;
    id: string;
    attributes: {
      [key: string]: any;
    };
    relationships: {
      [key: string]: any;
    };
  };
}

export interface DrupalEntity {
  type: string;
  id: string;
  attributes: {
    [key: string]: any;
  };
  relationships: {
    [key: string]: any;
  };
}

export interface DrupalMenu {
  items?: DrupalMenuLinkContent[];
  tree: DrupalMenuLinkContent[];
}

export interface DrupalSiteMenus {
  main?: DrupalMenu;
  footer?: DrupalMenu;
}

export interface NodePublicidad extends DrupalNode {
  field_imagen_destacada: DrupalMedia;
  field_is_destacado: boolean;
  field_categoria: DrupalTaxonomyTerm;
}

export interface NodePage extends DrupalNode {
  field_parrafos?: DrupalParagraph[];
}

export interface DrupalProfile {
  drupal_internal__profile_id?: number;
  type:
    | "profile--empresa"
    | "profile--veterinario"
    | "profile--auxiliar_tecnico_veterinario";
  field_imagen_del_perfil?: string;
  field_descripcion?: string;
  field_galeria?: string[] | [];
  field_telefonos?: string[];
  email: string;
  field_localizacion: {
    lat: number;
    lng: number;
  };
  field_direccion: {
    country_code: string;
    administrative_area: string;
    locality: string;
    address_line1: string;
    postal_code: string;
  };
}

export interface ProfileEmpresa extends DrupalProfile {
  field_nombre_empresa: string;
  field_categoria: string;
  field_sector: string;
  field_redes_sociales: {
    link: string;
    red_social: string;
  }[];
  field_horario?: {
    day: number;
    all_day: boolean;
    starthours: number;
    endhours: number;
    comment: string;
  }[];
  field_comodidades: string[];
  field_servicios: string[];
}

export interface ProfileVeterinario extends DrupalProfile {
  field_nombres: string;
  field_primer_apellido: string;
  field_segundo_apellido: string;
  field_especialidad: string;
  field_colegio_provincial: string;
}

export interface ParagraphClientesDestacados extends DrupalParagraph {
  field_titulo: string;
  field_subtitulo: string;
  field_link: string;
  field_color_de_fondo?: boolean;
  field_clientes: ProfileEmpresa[] | ProfileVeterinario[];
}
