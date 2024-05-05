type Props = {
  menuOpen: boolean;
  handleMenuButtonClick: () => void;
};

const BurgerButton = (props: Props) => {
  const { menuOpen, handleMenuButtonClick } = props;

  return (
    <button
      className="flex flex-col gap-1 sm:hidden"
      onClick={handleMenuButtonClick}
    >
      <span className="visually-hidden">Открыть меню</span>
      <div
        className={`h-0.5 w-5 bg-black rounded-md transition-transform ${
          menuOpen && "rotate-45 translate-y-1.5"
        }`}
      ></div>
      <div
        className={`h-0.5 w-5 bg-black rounded-md transition-transform ${
          menuOpen && "-rotate-45"
        }`}
      ></div>
      <div
        className={`h-0.5 w-3.5 bg-black rounded-md translate-x-1.5 transition-opacity ${
          menuOpen && "opacity-0"
        }`}
      ></div>
    </button>
  );
};

export default BurgerButton;
