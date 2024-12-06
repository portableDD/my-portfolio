type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className='rounded-lg bg-gradient-to-r from-peach to-blackGradient border border-peach px-5 py-2.5 '
    >
      {children}
    </button>
  );
};

export default Button;
