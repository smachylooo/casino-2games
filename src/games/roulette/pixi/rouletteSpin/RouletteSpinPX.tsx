import { Container, Sprite, useTick } from '@pixi/react';
import externalCircle from '../../../../assets/roulette/external-circle.png';
import mediumCircle from '../../../../assets/roulette/medium-circle.png';
import internalCircle from '../../../../assets/roulette/internal-circle.png';
import wheel from '../../../../assets/roulette/wheel.png';
import arrow from '../../../../assets/roulette/arrow.png';
import bgRoulette from '../../../../assets/roulette/bg-roulette.png'

import { useState, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectRouletteSpinRotationInProgress, selectRouletteSpinSpeed, setRouletteSpinDegreesRotation, setRouletteSpinSpeed } from '../../slices/rouletteSpinSlice';
import { radianToDegrees } from '../../../../shared/lib/degrees/radianToDgrees';
import { RouletteLifecycle, setRouletteLifecycle } from '../../slices/rouletteSlice';
import {sound} from '@pixi/sound'
import { SOUNDS_ROUETTE } from '../../scenes/GameScene/config';

interface IRouletteSpinPXProps {}

const POSITTION_SPIN = {
    x: 264,
    y: 286
}

const POSITTION_ARROW = {
    x: 265,
    y: 160,
    rotation: -.45
}


const RouletteSpinPX: FC<IRouletteSpinPXProps> = () => {
    const speed = useAppSelector(selectRouletteSpinSpeed)
    const dispatch = useAppDispatch();
    const rotationInProgress = useAppSelector(selectRouletteSpinRotationInProgress)
    const [rotationMedium, setRotationMedium] = useState(0)
    const [rotationWheel, setRotationWheel] = useState(0)

    useTick((delta) => {
        if (rotationInProgress){
          const rotation = delta * speed;
          setRotationMedium((prev) => prev + rotation);
          setRotationWheel((prev) => prev - rotation);
          if (speed < 0.005) {
            dispatch(setRouletteSpinSpeed(0))
            dispatch(setRouletteSpinDegreesRotation(
                radianToDegrees(rotationMedium % (Math.PI * 2))
              ))
            sound.stop(SOUNDS_ROUETTE.SPIN)
            dispatch(setRouletteLifecycle(RouletteLifecycle.FINISHED))
          } else {
            dispatch(setRouletteSpinSpeed(null))
          }
        }
      })
    return (
         <Container>
            <Sprite 
                image={bgRoulette}
                x={425}
                y={500}
                anchor={1}
            />
            <Sprite 
                image={externalCircle}
                x={POSITTION_SPIN.x}
                y={POSITTION_SPIN.y}
                anchor={.5}
            />
            <Sprite 
                image={mediumCircle}
                x={POSITTION_SPIN.x}
                y={POSITTION_SPIN.y}
                rotation={rotationMedium}
                anchor={.5}
            />
            <Sprite 
                image={internalCircle}
                x={POSITTION_SPIN.x}
                y={POSITTION_SPIN.y}
                anchor={.5}
            />
            <Sprite 
                image={wheel}
                x={POSITTION_SPIN.x}
                y={POSITTION_SPIN.y}
                rotation={rotationWheel}
                anchor={.5}
            />
            <Sprite 
                image={arrow}
                x={POSITTION_ARROW.x}
                y={POSITTION_ARROW.y}
                rotation={POSITTION_ARROW.rotation}
                anchor={.5}
            />
         </Container>
    );
}

export default RouletteSpinPX;
