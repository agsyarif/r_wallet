const Button = ({ title, color, style }: ButtonProps) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'yellow':
        return 'bg-yellow hover:bg-yellow';
      case 'purple':
        return 'bg-purple hover:bg-purple';
      default:
        return 'bg-yellow hover:bg-yellow';
    }
  };

  return (
      <a
        href="#"
        className={`rounded-md ${getColorClass(
          color
        )} px-3.5 py-2.5 text-sm font-semibold text-dark-gray shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${style}`}
      >
        {title}
      </a>
  );
};

type ButtonProps = {
  title: string;
  color: string;
  style: string;
};

Button.defaultProps = {
  color: 'yellow', // Default color is yellow
  style: null
};

export default Button;
