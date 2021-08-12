import React from 'react'
import Logotop from './images/logo-mastercraft.svg'
import { Button} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function Topsection() {
      const [selected, setSelected] = React.useState(false);

    return (
        <div>
            <img src={Logotop}></img>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <Button variant="contained">Default</Button>
            <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                setSelected(!selected);
                }}
            >
         
            </ToggleButton>

        </div>
    )
}
