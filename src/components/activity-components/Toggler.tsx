import {useState} from 'react'

//create ccomponent
function Toggler() {
    const[isOn, setIsOn] = useState(false);

    return(
        <div>
            <button onClick={(e) => setIsOn(!isOn)}>Togggle</button>

            <p>Status{isOn ? 'On': 'Off'}</p>

        {isOn && (
            <div style={{backgroundColor: 'pink'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique dolore, cupiditate aperiam labore enim neque illum rerum omnis molestiae provident, eveniet facilis libero quae asperiores nulla vitae voluptate voluptas?
        </div>
        )}
        </div>
    );
}

export default Toggler;