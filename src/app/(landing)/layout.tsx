const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full  overflow-auto">
      <div className="mx-auto max-w-screen-2xl h-full ">{children}</div>
    </main>
  );
};

export default LandingLayout;
