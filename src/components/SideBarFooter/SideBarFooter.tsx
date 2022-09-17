import {useStyles} from "./styles";

export interface SidebarFooterProps {
  logo?: string;
}

export const SideBarFooter: React.FC<SidebarFooterProps> = ({logo}) => {
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.poweredByText}>Powered by</div>
      <div>
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Proofspace logo" />
        </div>
        <div className={classes.helpTextWrapper}>
          <p className={classes.helpText}>Need help? Click here.</p>
        </div>
      </div>
    </div>
  );
};
