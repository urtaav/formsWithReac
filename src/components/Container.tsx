interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-0  h-full flex items-center justify-start relative gap-3 ">
      {children}
    </div>
  );
};

export default Container;
