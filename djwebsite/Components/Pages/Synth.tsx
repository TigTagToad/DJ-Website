import {SynthEngine} from "../Synth/SynthEngine"
import { Note, Octave} from "../../Types/synthTypes";
import { Knob } from 'primereact/knob';
import { useState, useEffect, useCallback } from "react";


export const Synth = () => {
    const [attack, setAttack] = useState(0)
    const [release, setRelease] = useState(0)
    const [octave, setOctave] = useState<Octave>(0)

    const decrementOctave = useCallback((prev: Octave) => {
        return Math.max(0, prev - 1) as Octave;
    }, []);
    
    const incrementOctave = useCallback((prev: Octave) => {
        return Math.min(9, prev + 1) as Octave;
    }, []);
    
    const handleClick = useCallback((note: Note) => {
        console.log("Playing note:", note);
        return SynthEngine(note, attack, release);
    }, [attack, release]);
    
    useEffect(() => {  
        const handleKeyDown = (event: KeyboardEvent) => {
            
            
            console.log(`Key pressed: ${event.key}, Current Octave: ${octave}`);
            
            switch (event.key.toLowerCase()) { 
                case "a":
                    event.preventDefault();
                    handleClick(`C${octave}`);
                    break;
                case "w":
                    event.preventDefault();
                    handleClick(`C#${octave}`);
                    break;
                case "s":
                    event.preventDefault();
                    handleClick(`D${octave}`);
                    break;
                case "e":
                    event.preventDefault();
                    handleClick(`D#${octave}`);
                    break;
                case "d":
                    event.preventDefault();
                    handleClick(`E${octave}`);
                    break;
                case "f":
                    event.preventDefault();
                    handleClick(`F${octave}`);
                    break;
                case "t":
                    event.preventDefault();
                    handleClick(`F#${octave}`);
                    break;
                case "g":
                    event.preventDefault();
                    handleClick(`G${octave}`);
                    break;
                case "y":
                    event.preventDefault();
                    handleClick(`G#${octave}`);
                    break;
                case "h":
                    event.preventDefault();
                    handleClick(`A${octave}`);
                    break;
                case "u":
                    event.preventDefault();
                    handleClick(`A#${octave}`);
                    break;
                case "j":
                    event.preventDefault();
                    handleClick(`B${octave}`);
                    break;
                case "z":
                    event.preventDefault();
                    console.log("Decreasing octave from", octave);
                    setOctave(prev => {
                        const newOctave = decrementOctave(prev);
                        console.log("New octave after decrease:", newOctave);
                        return newOctave;
                    });
                    break;
                case "x":
                    event.preventDefault();
                    console.log("Increasing octave from", octave);
                    setOctave(prev => {
                        const newOctave = incrementOctave(prev);
                        console.log("New octave after increase:", newOctave);
                        return newOctave;
                    });
                    break;
                default:
                    return; 
            }
        };
      
        // Add the event listener
        window.addEventListener("keydown", handleKeyDown);

        // Debug logging for octave changes
        console.log("Effect re-running with octave:", octave);

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [octave, attack, release, handleClick, decrementOctave, incrementOctave]);
    
    return (
        <div>
            <h1>Synth</h1>
            <div>Current Octave: {octave}</div>
            <div>
                <Knob value={attack} onChange={(e) => setAttack(e.value)} min={0} max={2} step={0.1} />
                <div>Attack</div>
            </div>
            <div>
                <Knob value={release} onChange={(e) => setRelease(e.value)} min={0} max={10} step={0.1} />
                <div>Release</div>
            </div>
            <div>
                <button onClick={() => handleClick(`C${octave}`)}>C</button>
                <button onClick={() => handleClick(`C#${octave}`)}>C#</button>
                <button onClick={() => handleClick(`D${octave}`)}>D</button>
                <button onClick={() => handleClick(`D#${octave}`)}>D#</button>
                <button onClick={() => handleClick(`E${octave}`)}>E</button>
                <button onClick={() => handleClick(`F${octave}`)}>F</button>
                <button onClick={() => handleClick(`F#${octave}`)}>F#</button>
                <button onClick={() => handleClick(`G${octave}`)}>G</button>
                <button onClick={() => handleClick(`G#${octave}`)}>G#</button>
                <button onClick={() => handleClick(`A${octave}`)}>A</button>
                <button onClick={() => handleClick(`A#${octave}`)}>A#</button>
                <button onClick={() => handleClick(`B${octave}`)}>B</button>
            </div>
            {/* Add buttons for octave control as a fallback */}
            <div>
                <button onClick={() => setOctave(prev => decrementOctave(prev))}>Octave Down (Z)</button>
                <button onClick={() => setOctave(prev => incrementOctave(prev))}>Octave Up (X)</button>
            </div>
        </div>
    );
}