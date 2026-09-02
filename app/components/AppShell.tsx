import { Header } from "./Header";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background">{children}</main>
      </div>
    </>
  );
};
