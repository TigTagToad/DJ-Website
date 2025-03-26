import React, { useState, useEffect, useCallback } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { SynthEngine } from "../Synth/SynthEngine";
import { Note, Octave } from "../../Types/synthTypes";
import { Knob } from 'primereact/knob';

    // Global Reset and Base Styles
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        background: #222;
        color: white;
        font-family: Arial, sans-serif;
    }
    `;

    // Styled Components for Piano Keyboard
const SynthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    `;

const KeyboardSet = styled.div`
        display: flex;
        position: relative;
        height: 18.875em;
        width: 34em;
        margin: 2em auto;
        padding: 3em 3em 0 3em;
        border: 1px solid #160801;
        border-radius: 1em;
        box-shadow: 
            0 0 50px rgba(0,0,0,0.5) inset,
            0 1px rgba(212,152,125,0.2) inset,
            0 5px 15px rgba(0,0,0,0.5);
        
    `;

const WhiteKey = styled.button`
        height: 16em;
        width: 6em;
        margin: 0;
        z-index: 1;
        border: 1px solid #bbb;
        border-left-width: 0; 
        border-radius: 0; 
        box-shadow: 
            -1px 0 0 rgba(255,255,255,0.8) inset,
            0 0 5px #ccc inset,
            0 0 3px rgba(0,0,0,0.2);
        background: linear-gradient(to bottom, #eee 0%, #fff 100%);
        cursor: pointer;
        color: black;

            &:first-child {
            border-left-width: 1px;          
            border-top-left-radius: 5px;     
            border-bottom-left-radius: 5px;  
        }

        
        &:last-child {
            border-top-right-radius: 5px;     
            border-bottom-right-radius: 5px;  
        }

        &:active, &:focus {
            border-top: 1px solid #777;
            border-left: 1px solid #999;
            border-bottom: 1px solid #999;
            box-shadow: 
            2px 0 3px rgba(0,0,0,0.1) inset,
            -5px 5px 20px rgba(0,0,0,0.2) inset,
            0 0 3px rgba(0,0,0,0.2);
            background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
            outline: none;
        }
    `;

const BlackKey = styled.button`
    height: 8em;
    width: 2em;
    margin: 0 0 0 -2.5em;
    z-index: 2;
    justify-content: center;
    border: none;
    border-radius: 0 0 3px 3px;
    box-shadow: 
        -1px -1px 2px rgba(255,255,255,0.2) inset,
        0 -5px 2px 3px rgba(0,0,0,0.6) inset,
        0 2px 4px rgba(0,0,0,0.5);
    background: linear-gradient(45deg, #222 0%, #555 100%);
    cursor: pointer;
    color: white;

    &:active, &:focus {
        box-shadow: 
        -1px -1px 2px rgba(255,255,255,0.2) inset,
        0 -2px 2px 3px rgba(0,0,0,0.6) inset,
        0 1px 2px rgba(0,0,0,0.5);
        background: linear-gradient(to right, #444 0%, #222 100%);
        outline: none;
    }
    `;

const ControlSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    `;

const OctaveControl = styled.div`
    display: flex;
    gap: 1rem;
    `;

export const Synth: React.FC = () => {
    const [attack, setAttack] = useState(0);
    const [release, setRelease] = useState(0);
    const [octave, setOctave] = useState<Octave>(0);

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
                case "a": event.preventDefault(); handleClick(`C${octave}`); break;
                case "w": event.preventDefault(); handleClick(`C#${octave}`); break;
                case "s": event.preventDefault(); handleClick(`D${octave}`); break;
                case "e": event.preventDefault(); handleClick(`D#${octave}`); break;
                case "d": event.preventDefault(); handleClick(`E${octave}`); break;
                case "f": event.preventDefault(); handleClick(`F${octave}`); break;
                case "t": event.preventDefault(); handleClick(`F#${octave}`); break;
                case "g": event.preventDefault(); handleClick(`G${octave}`); break;
                case "y": event.preventDefault(); handleClick(`G#${octave}`); break;
                case "h": event.preventDefault(); handleClick(`A${octave}`); break;
                case "u": event.preventDefault(); handleClick(`A#${octave}`); break;
                case "j": event.preventDefault(); handleClick(`B${octave}`); break;
                case "z": 
                    event.preventDefault();
                    setOctave(prev => decrementOctave(prev));
                    break;
                case "x": 
                    event.preventDefault();
                    setOctave(prev => incrementOctave(prev));
                    break;
                default:
                    return; 
            }
        };
      
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [octave, attack, release, handleClick, decrementOctave, incrementOctave]);
    
    return (
        <>
            <GlobalStyle />
            <SynthContainer>
                <h1>Synth</h1>
                <div>Current Octave: {octave}</div>
                
                <ControlSection>
                    <div>
                        <Knob value={attack} onChange={(e) => setAttack(e.value)} min={0} max={2} step={0.1} />
                        <div>Attack</div>
                    </div>
                    <div>
                        <Knob value={release} onChange={(e) => setRelease(e.value)} min={0} max={10} step={0.1} />
                        <div>Release</div>
                    </div>
                </ControlSection>

                <KeyboardSet>
                    <WhiteKey onClick={() => handleClick(`C${octave}`)}>C</WhiteKey>
                    <BlackKey onClick={() => handleClick(`C#${octave}`)}>C#</BlackKey>
                    <WhiteKey onClick={() => handleClick(`D${octave}`)}>D</WhiteKey>
                    <BlackKey onClick={() => handleClick(`D#${octave}`)}>D#</BlackKey>
                    <WhiteKey onClick={() => handleClick(`E${octave}`)}>E</WhiteKey>
                    <WhiteKey onClick={() => handleClick(`F${octave}`)}>F</WhiteKey>
                    <BlackKey onClick={() => handleClick(`F#${octave}`)}>F#</BlackKey>
                    <WhiteKey onClick={() => handleClick(`G${octave}`)}>G</WhiteKey>
                    <BlackKey onClick={() => handleClick(`G#${octave}`)}>G#</BlackKey>
                    <WhiteKey onClick={() => handleClick(`A${octave}`)}>A</WhiteKey>
                    <BlackKey onClick={() => handleClick(`A#${octave}`)}>A#</BlackKey>
                    <WhiteKey onClick={() => handleClick(`B${octave}`)}>B</WhiteKey>
                </KeyboardSet>

                <OctaveControl>
                    <button onClick={() => setOctave(prev => decrementOctave(prev))}>Octave Down (Z)</button>
                    <button onClick={() => setOctave(prev => incrementOctave(prev))}>Octave Up (X)</button>
                </OctaveControl>
            </SynthContainer>
        </>
    );
};