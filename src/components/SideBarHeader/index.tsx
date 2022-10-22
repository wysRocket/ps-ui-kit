import DefaultIcon from "@mui/icons-material/InsertPhoto";
import Box from "@mui/material/Box";
import {FC} from "react";

import {styles} from "./styles";

export interface SidebarHeaderProps {
  userName: string;
  logo?: string;
  isMinimized?: boolean;
}

const SideBarHeader: FC<SidebarHeaderProps> = ({userName, logo, isMinimized = false}) => {
  const {headerDefaultWrapper, headerMinimizedWrapper, logoWrapper, logoStyle, defaultLogoStyle} =
    styles;

  return (
    <Box sx={{...headerDefaultWrapper, ...(isMinimized ? headerMinimizedWrapper : {})}}>
      <div style={logoWrapper}>
        {logo ? (
          <img style={logoStyle} src={logo} alt={""} />
        ) : (
          <DefaultIcon className={`${logoStyle} ${defaultLogoStyle}`} />
        )}
      </div>
      {!isMinimized && <div className={userName}>{userName}</div>}
    </Box>
  );
};

export default SideBarHeader;
