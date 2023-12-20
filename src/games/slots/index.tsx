import type { FC } from 'react';
import SlotGameScene from './scenes/GameScene';

interface ICoreGameSlotsProps {}

const CoreGameSlots: FC<ICoreGameSlotsProps> = () => {
    return (
      <div>
        <SlotGameScene />
      </div>  
    );
}

export default CoreGameSlots;