import {SynthEngine} from "../Synth/SynthEngine"
import { Note } from "../../Types/synthTypes";
import { Knob } from 'primereact/knob';
import { useState } from "react";

import * as Tone from "tone";
export const Synth = () => {
    const [attack, setAttack] = useState(0)
    const [release, setRelease] = useState(0)
    const handleClick = (note: Note) =>{
        
        Tone.start();
        return (
            SynthEngine(note, attack, release)
        )
    }
    return(

        <div>
        <h1>synth</h1>
            <>
                <Knob value={attack} onChange={(e) => setAttack(e.value)}  min={0} max={2} step={0.1} />
                <>attack</> 
            </>
            <>
                <Knob value={release} onChange={(e) => setRelease(e.value)}  min={0} max={100} step={0.1} />
                <>release</> 
            </>
        <button onClick={()=>handleClick('C2')}>C</button>
        <button onClick={()=>handleClick('C#2')}>C#</button>
        <button onClick={()=>handleClick('D2')}>D</button>
        <button onClick={()=>handleClick('D#2')}>D#</button>
        <button onClick={()=>handleClick('E2')}>E</button>
        <button onClick={()=>handleClick('F2')}>F</button>
        <button onClick={()=>handleClick('F#2')}>F#</button>
        <button onClick={()=>handleClick('G2')}>G</button>
        <button onClick={()=>handleClick('G#2')}>G#</button>
        <button onClick={()=>handleClick('A2')}>A</button>
        <button onClick={()=>handleClick('A#2')}>A#</button>
        <button onClick={()=>handleClick('B2')}>B</button>
        </div>
    )
        
    }