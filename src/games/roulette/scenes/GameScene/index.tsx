
import { FC, useEffect } from 'react';
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/ContextBrige';
import GameSceneActionsProvider from './GameSceneActionsProvider';
import BgPX from '../../pixi/bg/bgPX';

import sounBg from '../../../../assets/sounds/roulette/bg.mp3'
import sounBet from '../../../../assets/sounds/roulette/bet.mp3'
import sounNumber from '../../../../assets/sounds/roulette/number.mp3'
import sounRouletteSpin from '../../../../assets/sounds/roulette/spin.mp3'
import { sound } from '@pixi/sound';
import { SOUNDS_ROUETTE } from './config';

import * as PIXI from 'pixi.js';


interface IRouletteGameSceneProps {}

const [width, heigth] = [1150, 500]


const RouletteGameScene: FC<IRouletteGameSceneProps> = () => {
    sound.add(SOUNDS_ROUETTE.BG, sounBg);
    sound.add(SOUNDS_ROUETTE.BET, sounBet);
    sound.add(SOUNDS_ROUETTE.NUMBER, sounNumber);
    sound.add(SOUNDS_ROUETTE.SPIN, sounRouletteSpin);

    useEffect(()=>{
        (async ()=>{
            await PIXI.Assets.load(SOUNDS_ROUETTE.BG)
            sound.volume(SOUNDS_ROUETTE.BG, .2)
            sound.play(SOUNDS_ROUETTE.BG)
        })()
    },[])

    return (
        <div className='flex flex-col items-center'>
            <div>Title game</div>
            <GameSceneActionsProvider>
            <GameSceneUI>
                <Stage
                    width={width}
                    height={heigth}
                    options={{
                        background: 'green'
                    }}
                >
                    <BgPX />
                    <RouletteSpinPX />
                </Stage>
            </GameSceneUI>
            </GameSceneActionsProvider>
        </div>
    );
}

export default RouletteGameScene;
