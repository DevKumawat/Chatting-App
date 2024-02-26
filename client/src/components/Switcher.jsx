import React, { useState } from 'react';
// import useDarkSide from './Hook/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from './useDarkSide';
import toast, { Toaster } from "react-hot-toast";


export default function Switcher() {
const [colorTheme, setTheme] = useDarkSide();
const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

const toggleDarkMode = checked => {
setTheme(colorTheme);
setDarkSide(checked);

if(colorTheme === "dark"){

    toast('Hello Darkness!',
      {
        icon: '🤗',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration:2000
      }
    );
}
};

return (
<>
<div>
<DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} moonColor="yellow" sunColor='yellow' size={40} />
<Toaster/>
</div>
</>
);
}