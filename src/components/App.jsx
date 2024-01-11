import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/clicksSlice';

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(state => state.clicks)
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <button type = 'button' onClick={() => dispatch(update(5))}>Number of clicks {numberOfClicks}</button>
    </div>
  );
};
