const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full text-accent flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:to-slate-900 dark:from-blue-900">
      {children}
    </div>
  );
};

export default AuthLayout;
