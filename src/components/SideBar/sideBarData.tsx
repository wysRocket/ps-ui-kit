import DashboardIcon from "@mui/icons-material/Dashboard";
import ActionsIcon from "@mui/icons-material/CheckCircle";
import ClientsIcon from "@mui/icons-material/People";
import SchemasIcon from "@mui/icons-material/Transform";
import InfoIcon from "@mui/icons-material/Info";
import ProfileIcon from "@mui/icons-material/SettingsCell";
import UsersIcon from "@mui/icons-material/Accessibility";
import IntegrationsIcon from "@mui/icons-material/Category";
import SSAOAuthIcon from "@mui/icons-material/VpnKey";
import KeysIcon from "@mui/icons-material/Https";
import KnowledgeBaseIcon from "@mui/icons-material/LiveHelp";

export const sideBarData = [
  {title: "Dashboard", to: "/2RjEBo9zXkJByXm14xQHtg", icon: <DashboardIcon />},
  {title: "Clients", to: "/2RjEBo9zXkJByXm14xQHtg/clients", icon: <ClientsIcon />},
  {title: "Schemas", to: "/2RjEBo9zXkJByXm14xQHtg/schemas", icon: <SchemasIcon />},
  {title: "Interactions", to: "/2RjEBo9zXkJByXm14xQHtg/actions", icon: <ActionsIcon />},
  {title: "Custom Profiles", to: "/2RjEBo9zXkJByXm14xQHtg/profiles", icon: <ProfileIcon />},
  {title: "Roles & Access", to: "/2RjEBo9zXkJByXm14xQHtg/users", icon: <UsersIcon />},
  {
    title: "Integrations",
    to: "/2RjEBo9zXkJByXm14xQHtg/integrations",
    icon: <IntegrationsIcon />
  },
  {title: "Keys", to: "/2RjEBo9zXkJByXm14xQHtg/keys", icon: <KeysIcon />},
  {title: "SSI OAuth", to: "/2RjEBo9zXkJByXm14xQHtg/oauth", icon: <SSAOAuthIcon />},
  {title: "Service Info", to: "/2RjEBo9zXkJByXm14xQHtg/service", icon: <InfoIcon />},
  {title: "Knowledge Base", to: "", icon: <KnowledgeBaseIcon />}
];
