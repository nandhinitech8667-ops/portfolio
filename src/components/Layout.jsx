const Layout = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
