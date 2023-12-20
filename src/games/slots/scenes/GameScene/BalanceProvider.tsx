import { useEffect, type FC, type ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, SlotWinOrLose, selectSlotCurrentBet, selectSlotLifecycle, selectSlotWinOrLose } from '../../slices/slotSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlice';

interface IBalanceProviderProps {
    children: ReactNode;
}

const KOEF_WIN=10;

const BalanceProvider: FC<IBalanceProviderProps> = ({
    children
}) => {
    const lifecycle = useAppSelector(selectSlotLifecycle)
    const isPlaying = lifecycle === SlotLifecycle.PLAY;
    const win= useAppSelector(selectSlotWinOrLose);
    const currentBet = useAppSelector(selectSlotCurrentBet)

    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(isPlaying){
            dispatch(setBalance( win===SlotWinOrLose.WIN ? currentBet * KOEF_WIN : -currentBet))
        }
    },[lifecycle])
    return (
        <>
            {children}
        </>
    );
}

export default BalanceProvider;
