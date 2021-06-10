import React, { useState, useRef, useEffect} from 'react';
import '../../CSS/style.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Dropdown({options, id, label, value, onChange, prompt}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close)

    return () => document.removeEventListener("click", close)
  }, [])

  function close(e){
      setOpen(e && e.target === ref.current)
  }

  return  <div className="dropdown">
            <div className="control" onClick={() =>setOpen(prev => !prev)}>
              <div className="dropdown value" ref={ref}>{ value ? value[label] : prompt}</div>
              <ExpandMoreIcon className={`iconExpandMore ${open ? "open" : null}`}/>
            </div>

            <div className="iconExpandMore" className={`options ${open ? 'open' : null}`}>
              {
                options.map(option =>
                  <div key={option[id]} className={`option ${value === option ? 'selected' : null}`} onClick={() => {onChange(option)
                    setOpen(false)
                  }}>{option[label]}
                  </div>
                  )
              }
            </div>
          </div>
}
