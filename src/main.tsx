import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";

import { theme } from "./theme";
import Router from "./routes/router";
import ProtectedApp from "./components/protected";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { onSigninCallback, queryClient, userManager } from "./config";

createRoot(document.getElementById("root")!).render(
  <AuthProvider userManager={userManager} onSigninCallback={onSigninCallback}>
    <MantineProvider theme={theme}>
      <Notifications position="top-right" limit={5} autoClose={5000} />
      <QueryClientProvider client={queryClient}>
        <ProtectedApp>
          <Router />
        </ProtectedApp>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  </AuthProvider>
);
