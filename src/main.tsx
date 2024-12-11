import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import axios from "axios";

import { theme } from "./theme";
import Router from "./routes/router";
import ProtectedApp from "./components/protected";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { onSigninCallback, userManager } from "./lib/oidc_config";
import { queryClient } from "./lib/tanstack_config";
import { BrowserRouter } from "react-router";
import { initAxiosInterceptors } from "./lib/axios_config";

axios.defaults.baseURL = "http://localhost:5055/";
initAxiosInterceptors();

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
