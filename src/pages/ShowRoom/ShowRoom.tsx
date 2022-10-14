import styles from "./ShowRoom.module.css";
import useCars from "./hooks/useCars";

const ShowRoom = () => {
  const cars = useCars();

  return (
    <div className={styles.container}>
      <h1>ShowRoom</h1>

      {cars.map((car) => (
        <p>{car.name}</p>
      ))}
    </div>
  );
};

export default ShowRoom;
