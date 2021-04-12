export enum Padding {
  XS = 8,
  S = 16,
  M = 24,
  L = 32,
  XL = 40,
  XXL = 48
}

export interface SideBarColors {
  BG: string;
  ACTIVE_ITEM_BG: string;
  HOVERED: string;
  TEXT: string;
  ICON: string;
  ACTIVE_TEXT: string;
  ACTIVE_ICON: string;
  ITEM_BG: string;
}

export interface ButtonColors {
  readonly BG_COLOR: string;
  readonly COLOR: string;
  readonly HOVERED_BG_COLOR: string;
  readonly HOVERED_COLOR: string;
}

export interface FormColors {
  readonly COLOR: string;
  readonly TAB_INDICATOR_COLOR: string;
  readonly FOCUSED_COLOR: string;
}

interface Theme {
  SideBarColors: SideBarColors;
  ButtonColors: ButtonColors;
  FormColors: FormColors;
}

export const OrangeTheme: Theme = {
  SideBarColors: {
    BG: '#f8f8f8',
    ACTIVE_ITEM_BG: '#F7E5D0',
    HOVERED: 'rgba(247, 229, 208, .5)',
    TEXT: '#717171',
    ICON: '#CDC6BF',
    ACTIVE_TEXT: '#f3890a',
    ACTIVE_ICON: '#F39B31',
    ITEM_BG: '#F7E5D0'
  },
  ButtonColors: {
    BG_COLOR: '#F39B31',
    COLOR: '#FFFFFF',
    HOVERED_BG_COLOR: '#f3890a',
    HOVERED_COLOR: '#FFFFFF',
  },
  FormColors: {
    COLOR: 'rgba(243, 155, 49, 1)',
    TAB_INDICATOR_COLOR: '#F39B31',
    FOCUSED_COLOR: '#F39B31'
  }
};

export const BlueTheme: Theme = {
  SideBarColors: {
    BG: '#f8f8f8',
    ACTIVE_ITEM_BG: '#C5F1FD',
    HOVERED: 'rgba(197, 241, 253, .5)',
    TEXT: '#717171',
    ICON: '#CDC6BF',
    ACTIVE_TEXT: '#19B4E1',
    ACTIVE_ICON: '#00C6F4',
    ITEM_BG: '#C5F1FD'
  },
  ButtonColors: {
    BG_COLOR: '#00C6F4',
    COLOR: '#FFFFFF',
    HOVERED_BG_COLOR: '#00C6F4',
    HOVERED_COLOR: '#FFFFFF',
  },
  FormColors: {
    COLOR: '#19B4E1',
    TAB_INDICATOR_COLOR: '#19B4E1',
    FOCUSED_COLOR: '#19B4E1'
  }
};

class SideBarGfg {
  private color: SideBarColors = OrangeTheme.SideBarColors;
  init(color: SideBarColors) {
    this.color = color;
  }

  get Color() {
    return this.color;
  }

  get Size() {
    return {
      WIDTH: 200,
      MINIMIZED_WIDTH: 56,
      ITEM_WIDTH: 184,
      ICON_SIZE: 20,
      FONT_SIZE: 15,
    };
  }
}
export const SideBar = new SideBarGfg();

class FormsCfg {
  private colors: FormColors = OrangeTheme.FormColors;

  init(colors: FormColors) {
    this.colors = colors;
  }

  get Item() {
    return this.colors;
  }
}
export const Forms = new FormsCfg();

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

class ButtonsCfg {
  private orange: ButtonColors = OrangeTheme.ButtonColors;

  init(orange: ButtonColors) {
    this.orange = orange;
  }

  get Orange() {
    return this.orange;
  }

  get Gray() {
    return {
      BG_COLOR: '#E4E4E4',
      COLOR: '#1F1F1F',
      HOVERED_BG_COLOR: '#EDEDED',
      HOVERED_COLOR: '#1F1F1F'
    };
  }

  get Red() {
    return {
      BG_COLOR: '#F34040',
      COLOR: '#F34444',
      HOVERED_BG_COLOR: '#fc4747',
      HOVERED_COLOR: '#F34444'
    };
  }
}
export const Buttons = new ButtonsCfg();

export function initTheme(theme: Theme) {
  SideBar.init(theme.SideBarColors);
  Buttons.init(theme.ButtonColors);
  Forms.init(theme.FormColors);
}
