import { useState } from 'react';
import Apple from './Apple';

const TapMeMore = () => {
    const [tapCount, setTapCount] = useState(0);
    const increaseTapCount = (currentTapCount) => {
        let newTapCount = currentTapCount + 1;
        setTapCount(newTapCount)
        return newTapCount;
    }

    return (
        <div className="bg-slate-700 h-screen w-screen">
            <Apple increaseTapCountFunc={increaseTapCount} tapCountData={tapCount} />
            <div className='absolute bottom-0 w-6/12 right-0 mx-12'>
                <h3 className='text-white text-3xl h-1/2'>Score: {tapCount}</h3>
            </div>
        </div >
    );
}

export default TapMeMore;