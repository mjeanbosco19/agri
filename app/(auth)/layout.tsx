const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dz7dvfuhf/image/upload/v1697801481/dahvyn9dax7n8ao3rund.jpg')]">
      {children}
    </div>
  );
};

export default AuthLayout;
