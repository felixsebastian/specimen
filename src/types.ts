export interface Style {
  css: () => string;
}

export interface Pixels extends Style {
  raw: number;
}

export interface Color extends Style {
  hex: string;
  rgba: string;
}

export interface Font {
  name: string;
  metrics?: any;
}
