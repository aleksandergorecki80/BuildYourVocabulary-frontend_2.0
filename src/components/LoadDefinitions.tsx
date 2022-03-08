import { useState } from "react";

const LoadDefinitions: React.FC = () => {
    const [ showButton, setShowButton ] = useState(true);

    const onLoadDefinitions = () => {
        console.log('load Definitions');
    }

    return ( 
        <div>
            <p>Press the button to load random definition and try to guess the word it describes.</p>
            { showButton ? <button onClick={ onLoadDefinitions }>Load</button> : null}
        </div>
     );
}
 
export default LoadDefinitions;