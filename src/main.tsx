import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { theme } from "./theme";
import { onSigninCallback, queryClient, userManager } from "./config";
import Router from "./routes/router";
import ProtectedApp from "./components/protected";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider userManager={userManager} onSigninCallback={onSigninCallback}>
    <MantineProvider theme={theme}>
      <Notifications position="top-right" limit={5} autoClose={5000} />
      <QueryClientProvider client={queryClient}>
        <ProtectedApp>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ProtectedApp>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  </AuthProvider>
);
