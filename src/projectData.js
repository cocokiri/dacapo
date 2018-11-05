import React from 'react'

import polyphonic from "./play_images/polyphonic.png"
import soundman from "./play_images/soundman.png"
import piano from "./play_images/piano.png"
import pitchvis from "./play_images/PitchVis.png"
import mousemusic from "./play_images/MouseMusic.png"
import polygon from "./play_images/Polygon800.png"
import histogram from "./play_images/MelodyHistogram.png"
import musicshooter from "./play_images/MusicShooter.png"
import notecatcher from "./play_images/NoteCatcher.png"
import spaceshooter from "./play_images/SpaceShooter_800x600.gif"
import intervaltraining from "./play_images/IntervalTraining_800x290.gif"
import deeppose from "./play_images/deeposedance3.gif"
import chem3D from "./play_images/chemistry3D_3.gif"


const projectData = [

    {
        title: "Polyphonic Pitch Detector",
        subtitle: "See your music live",
        image: polyphonic,
        link: "https://cocokiri.github.io/polyphon/",
        route: 'polyphonic',
        features: ['JS'],
        text: (<div>
            See your music live <br/>
            Develop insane intuition <br/>
            An interactive spectrogram that can instantly detect the
            note and chord(!) you are playing. Get a glimpse at the physics of sound while jamming or practicing.
            <br/>
            <br/>
            <br/>
            <em>Happy to say that this is by far the fastest(20ms) and most accurate music viz and polyphonic
                detection on the open web. Sing a song. </em>
            <br/>
            <br/>
            <em>Polyphonic chord detection FTW</em>
        </div>),
        alttext: (<div>
            See your music live <br/>
            An interactive spectrogram that can instantly detect the
            note and chord(!) you are playing. Get a glimpse at the physics of sound while jamming or practicing.
        </div>)
    },
    {
        title: "Soundman",
        subtitle: "Spit Fire with your Voice",
        image: soundman,
        link: "https://cocokiri.github.io/pitchEater/",
        route: "soundman",
        features: ['JS'],
        text: <>
            Your voice is key <br/>
            Your neck extends with pitch. If you can hold your pitch, Soundman spits fire to catch flies.
            Finally you face-off the Goblin - match his exact pitch to win.
            <br/>
            <br/>
            <em>PS: !(optimized_For_Performance)</em>
        </>
    },
    {
        title: "Piano FunFun (use Firefox)",
        subtitle: "Not for mobile. You need a Keyboard. Chrome has bugs with this one",
        image: piano,
        route: "piano",
        link: "https://cocokiri.github.io/webpiano/",
        features: ['JS'],
        text: <>
            Play the Sine Piano on your Keyboard. You can: <br/> <br/>
            + shift sound slowly or with Octave jumps <br/>
            + see the chords you're playing <br/>
            + face the music <br/>
            <br/>
            Give the special keys a try ;)<br/>

            NEW: >>> Practice with <a href=" ../chord-workout" target="blank"><b> Piano + ChordWorkout</b></a>
            <br/> <br/>
            <em>Sounds are triangle oscillators made through the Web Audio API. It's still experimental, not
                standard webtech...,
                sounds bit weirder on Safari. Use Firefox instead of Chrome</em>
        </>,
        alttext: <>
            Play the Sine Piano on your Keyboard. You can: <br/> <br/>
            + shift sound slowly or with Octave jumps <br/>
            + see the chords you're playing <br/>
            + face the music <br/>
            <br/>
            Give the special keys a try ;)<br/>
            <em>Use Firefox instead of Chrome</em>
        </>
    },
    {
        title: "RealTime Pitch Detection and Visualization",
        subtitle: "Fast and reliable",
        image: pitchvis,
        link: "https://cocokiri.github.io/PitchVisualizer-Spectrogram/",
        route: "monophonic",
        features: ['JS'],
        text: <>
            I made this intuitive, realtime spectrogram because all other pitch detection and spectrogram
            products on web/mobile were horrible. <br/><br/> E.g. bad mappings (<em>hello audacity</em>), dumb
            Signal Processing code (<em>why dafuq would I need autocorrelation for monophonics, Boris Smus?</em>)
            and cluttered, shit code from academics (<em>'popular' YIN algorithm -- 1200ms delay @ 70% accuracy.
                1000 lines of C# for jack shit. No thanks</em>).
            <br/><br/>
            You know it's bad when you see hardcoded frequency to note mappings instead of transform functions (just
            logarithms, bro).<br/><br/>
            The core pitch detection algorithm is extremely accurate for single harmonic sounds and has no delay (~
            1 Frame == 20ms).
            <br/> <br/>
            + Shows pitch and timbre exactly where it occurs in the spectrogram <br/>
            + Gives you a strong sense of intervals, fluctations and musical relationships <br/>
            + Even if tone-deaf, you see what's up and train your voice and ear. <br/> <br/>

            <em>It will ask you for microphone access. Might not work on all browsers.</em>
        </>
    }, {
        title: "Mouse Music",
        subtitle: null,
        image: mousemusic,
        link: null,
        features: ['JS'],
        text: <>Use your mouse to play with oscillator sounds. Other than most music web/mobile XPs I'm
            stricter with the mapping. This has the side-effect of actually learning something.
            <br/><br/>
            + Get a feeling for intervals and pitch<br/>
            + See the melody of the last few seconds<br/>
            <br/>

            <em>Might not work on all browsers.</em></>
    },
    {
        title: "Little Prince Reloaded",
        subtitle: null,
        image: polygon,
        link: null,
        features: ['Three JS'],
        text: <>
            Help Explorer Saint Exupery through the Rainbow Desert<br/>
            Covers a mysterious voicerange - forgot what it was. Good luck<br/>
            + Control plane height with pitch (voice/instrument) <br/><br/>
            <em>
                Abandoned -- Decided against using three.js for now. Polygon config for plane was borrowed. Will ask for
                microphone access.
                Turned off DEMO
            </em>
        </>
    },
    {
        title: "Melody Rider",
        subtitle: null,
        image: histogram,
        link: null,
        features: ['JS'],
        text: <>
            See a histogram of your pitch or monophonic sounds<br/> <br/>
            + Shows you how volatile your voice is <br/>
            + Gives good sense of melody you're playing <br/>
            + Challenge yourself to a singing range of one octave <br/> <br/>

            <em>
                Could need a longer buffer to correct for pitch jumps, but I moved on. Turned off DEMO, because I
                decided it sucks</em>
        </>
    },
    {
        title: "SpaceShooter 3D",
        subtitle: null,
        image: spaceshooter,
        link: null,
        features: ['Unity 3D', "C#"],
        text: <>Same concept as the earlier 2D spaceshooter. Dodge X, shoot Y -- you know
            the spiel. The pitch controls change with time and are always
            part of the major scale. <br/> <br/> Image: <em> C# = left, B = shoot; D# = right</em> <br/><br/>
            I demoed this game in San Francisco at the <em>Noisebridge 10-Year Anniversary</em> after being part
            of a game dev bootcamp there.</>
    },
    {
        title: "Note Catcher",
        subtitle: null,
        image: notecatcher,
        link: null,
        features: ['Unity 3D', "C#"],
        text: <>
            I borrowed another disappointing Pitch Detection module.
            You collect the colored triangles by playing their corresponding notes. The speed and width of the
            "player" depend on how consistent the pitch sounds
        </>
    },
    {
        title: "Space Shooter",
        subtitle: null,
        image: musicshooter,
        link: null,
        features: ['Unity 3D', "C#"],
        text: <>
            After two weeks of coding I used the YIN Pitch Detection algorithm to make a
            guitar controlled space shooter.
        </>
    },
    {
        title: "Interval Trainer",
        subtitle: null,
        image: intervaltraining,
        link: null,
        features: ['Unity 3D', "C#"],
        text: <>
            Humble beginnings. The program tests your ear. It plays an interval and you
            have to guess it.
        </>
    },
    {
        title: "Deep pose estimation",
        subtitle: "Some Fun with Machine Learning",
        image: deeppose,
        text: (<>
            3D coordinates from 2D images.
            <br/>
            <em>Used p5.js for Stick Figure animation. Code on Github</em>
            <br/>
        </>)
    },
    {
        title: "Atomic Jet",
        subtitle: "Explore Atombonding in 3D",
        image: chem3D,
        text: (<>
            Game based learning. Proof of Concept.
            <br/>
            <em>There's also an Oculus Rift VR version on Github.</em>
            <br/>
        </>)
    },
]

export default projectData