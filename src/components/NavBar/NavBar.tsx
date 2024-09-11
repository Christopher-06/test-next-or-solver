import { AppBar, Toolbar, Typography } from "@mui/material";

import { useLocaleContext } from "../LocaleProvider/LocaleProvider";

// EXAMPLE NAVIGATION BAR

export default function NavBar() {
  const userLocale = useLocaleContext();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">{userLocale.navbar.title}</Typography>
          <Typography variant="h6">{userLocale.navbar.description}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
