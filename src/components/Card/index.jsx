const Card = ({ children }) => {
  return <div className="bg-neutral-surface rounded-2xl overflow-hidden flex flex-col">{children}</div>;
};

export const CardHeader = ({ children }) => {
  return (
    <div className="bg-neutral-header py-3 px-4 text-center text-neutral-text text-base leading-[120%] font-bold">
      {children}
    </div>
  );
};

export const CardBody = ({ children }) => {
  return <div className="py-6 px-4 text-neutral-darker text-base leading-[120%] font-bold flex-grow flex flex-col justify-center">{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
