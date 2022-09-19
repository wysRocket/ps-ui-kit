import DashboardIcon from "@material-ui/icons/Dashboard";
import ActionsIcon from "@material-ui/icons/CheckCircle";
import ClientsIcon from "@material-ui/icons/People";
import SchemasIcon from "@material-ui/icons/Transform";
import InfoIcon from "@material-ui/icons/Info";
import ProfileIcon from "@material-ui/icons/SettingsCell";
import UsersIcon from "@material-ui/icons/Accessibility";
import IntegrationsIcon from "@material-ui/icons/Category";
import SSAOAuthIcon from "@material-ui/icons/VpnKey";
import KeysIcon from "@material-ui/icons/Https";
import KnowledgeBaseIcon from "@material-ui/icons/LiveHelp";

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
