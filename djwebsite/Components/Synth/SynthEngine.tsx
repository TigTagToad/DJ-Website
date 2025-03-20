import * as Tone from "tone";
import {Note} from "../../Types/synthTypes"

export const SynthEngine = (note: Note, attack: number, release: number ) => {

    const synth = new Tone.Synth().toDestination();
    
    const now = Tone.now();
    Tone.start();
// trigger the attack 
    synth.triggerAttack(note, now + attack);
// wait release amount of time to trigger the release
    synth.triggerRelease(now + release);
}