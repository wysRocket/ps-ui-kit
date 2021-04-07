export enum Padding {
  XS = 8,
  S = 16,
  M = 24,
  L = 32,
  XL = 40,
  XXL = 48
}

export interface Colors {
  BG: string;
  TEXT: string;
  ICON?: string;
  ACTIVE_TEXT?: string;
  ACTIVE_ICON?: string;
}

export const SideBar = {
  Color: {
    BG: '#f8f8f8',
    ACTIVE_ITEM_BG: '#F7E5D0',
    HOVERED: 'rgba(247, 229, 208, .5)',
    TEXT: '#717171',
    ICON: '#CDC6BF',
    ACTIVE_TEXT: '#f3890a',
    ACTIVE_ICON: '#F39B31',
    ITEM_BG: '#F7E5D0'
  },
  Size: {
    WIDTH: 200,
    MINIMIZED_WIDTH: 56,
    ITEM_WIDTH: 184,
    ICON_SIZE: 20,
    FONT_SIZE: 15,
  }
};

export const Icon = {
  Status: {
    Color: {
      COMPLETE: '#26C446',
      PENDING: '#359EDE',
      WARNING: '#F39B31',
      ERROR: '#E51E13',
    }
  },
  Button: {
    COLOR: '#BAB8B5'
  }
};

export const Table = {
  Color: {
    HEADER_BACKGROUND: '#f8f8f8',
    BORDER: '#dadcdd'
  }
};

export const Buttons = {
  Orange: {
    BG_COLOR: '#F39B31',
    COLOR: '#FFFFFF'
  },
  Gray: {
    BG_COLOR: '#E4E4E4',
    COLOR: '#1F1F1F'
  },
  Red: {
    BG_COLOR: '#F34040',
    COLOR: '#F34444'
  }
};
