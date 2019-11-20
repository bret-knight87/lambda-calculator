import React, { useState } from "react";


//import any components needed
import { specialsArray } from '../../../data';
import SpecialButton from './SpecialButton';

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specials, setSpecials] = useState(specialsArray)
  return (
    <div>
      {specialsArray.map (item => (
        <SpecialButton special={item} />
      ))}
    </div>
  );
};

export default Specials;
