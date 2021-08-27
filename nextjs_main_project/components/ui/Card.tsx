import classes from './Card.module.css';

interface ICardProps {}

const Card: React.FC<ICardProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
