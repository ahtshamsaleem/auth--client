'use client'
import { useEffect, useState } from "react";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";




export default function RootLayout({ children }) {
    

  return (
    <html lang="en">
       <AuthProvider><body>{children}</body></AuthProvider>
      
    </html>
  );
}
