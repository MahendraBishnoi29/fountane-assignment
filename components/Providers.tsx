"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

// Create a client
const queryClient = new QueryClient();

const Providers: FC<ProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
