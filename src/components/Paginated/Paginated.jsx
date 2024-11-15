import styles from './paginated.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/slice/pagination.slice';
import { Button, Input, Table } from "antd";

function Paginated({ quantityPage }) {
  const paginated = useSelector((state) => state.pagination.value);
  const dispatch = useDispatch();

  const handlePrevPage = () => dispatch(decrement());
  const handleNextPage = () => dispatch(increment());

  return (
    <div className={styles["container-buttons"]}>
      <Button
        color="primary"
        variant="solid"
        onClick={handlePrevPage}
        disabled={paginated <= 1}
      >
        Previus
      </Button>
      <Button
        color="primary"
        variant="solid"
        onClick={handleNextPage}
        disabled={paginated >= quantityPage}
      >
        Next
      </Button>
  </div>
  )
}

export default Paginated;