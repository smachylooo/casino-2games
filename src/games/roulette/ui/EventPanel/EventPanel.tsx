import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectRouletteSpinCurrentNumber, setRouletteSpinStartSpeed } from '../../slices/rouletteSpinSlice';
import { RouletteLifecycle, RouletteWinOrLose, selectRouletteLifecycle, selectRouletteWinOrLose, setRouletteLifecycle } from '../../slices/rouletteSlice';
import RouletteStartButton from '../../shared/button/RouletteStartButton';
import {sound} from '@pixi/sound'
import { SOUNDS_ROUETTE } from '../../scenes/GameScene/config';

interface IEventPanelProps {

}

const EventPanel:FC<IEventPanelProps> = () => {
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const dispatch = useAppDispatch();

  const onClick = () => {
    sound.play(SOUNDS_ROUETTE.SPIN)
    dispatch(setRouletteSpinStartSpeed());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY))
  };

  return (
    <div>
      {lifecycle === RouletteLifecycle.READY_TO_START && (
          <RouletteStartButton onClick={onClick} />
      )}
      {lifecycle === RouletteLifecycle.PLAY && (
        <div>Play</div>
      )}
      {lifecycle === RouletteLifecycle.FINISHED && (
        <div>Calcucating</div>
      )}
      {lifecycle === RouletteLifecycle.INFO && (
        <div className="flex gap-4">
          <div>
            {winOrLose === RouletteWinOrLose.WIN && 'Win'}
            {winOrLose === RouletteWinOrLose.LOSE && 'Lose'}
          </div>
          <div>{currentNumber}</div>
        </div>
      )}
    </div>
  )
};

export default EventPanel;