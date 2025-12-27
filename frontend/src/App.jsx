import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import AppShell from "./component/AppShell";
import Dashboard from "./pages/Dashboard";

const ClerkProtected = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

function App() {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Parent Route */}
        <Route path="/app" element={<ClerkProtected><AppShell /></ClerkProtected>}>
          {/* Nested Child Routes */}
          <Route path="dashboard" element={<Dashboard />} />
          {/* You can add more here, like <Route path="invoices" element={<Invoices />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
