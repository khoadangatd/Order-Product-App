import type { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        <p>© 2025 Dang Vo</p>
      </footer>
    </div>
  );
};

export default MainLayout;
