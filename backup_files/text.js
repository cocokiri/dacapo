const projects = [
    {
        title: "Polyphonic Pitch Detector",
        subtitle: "Can dected notes and chords(!)",
        image: polyphonic,
        link: null,
        features: ['JS'],
        text: (<div>
            See your music live <br/>
            Develop insane intuition <br/>
            An interactive spectrogram that can instantly detect the note and chord(!) you are playing.
            <br/>
            <br/>
            <br/>
            <em>Happy to say that this is by far the fastest(20ms) and most accurate music viz and polyphonic
                detection on the open web. Sing a song. </em>
            <br/>
            <br/>
            <em>Polyphonic chord detection FTW</em>
        </div>),
        paragraphs: [
            "See your music live",
            "Develop insane intuition",
            "An interactive spectrogram that can instantly detect the note and chord(!) you are playing."
        ],
        footnotes: [
            "Happy to say that this is by far the fastest(20ms) and most accurate music viz and polyphonic",
            "Polyphonic chord detection FTW"
        ]
    },
    {
        title: "Soundman",
        subtitle: "Play with your Voice",
        image: soundman,
        link: null,
        features: ['JS'],
        text: <>
            Your voice is key <br/>
            Your neck extends with pitch. If you can hold your pitch, Soundman spits fire to catch flies.
            Finally you face-off the Goblin - match his exact pitch to win.
            <br/>
            <br/>
            <em>PS: ! (optimized_For_Performance)</em>
        </>
    },
    {
        title: "Piano FunFun",
        subtitle: "You need a Keyboard. I'll do more for phones eventually",
        image: piano,
        link: null,
        features: ['JS'],
        text: <>
            Play the Piano on your Keyboard. You can: <br/> <br/>
            + shift sound slowly or with Octave jumps <br/>
            + see the chords you're playing <br/>
            + face the music <br/> <br/>
            + don't forget to use special keys! <br/> <br/>

            NEW: >>> Practice with <a href=" ../chord-workout" target="blank"><b> Piano + ChordWorkout</b></a>
            <br/> <br/>
            <em>Sounds are triangle oscillators made through the Web Audio API. It's still experimental, not
                standard webtech... sounds good on Chrome,
                sounds bit weirder on Safari. Cute faces don't show well in Firefox...</em>
        </>
    },
    {
        title: "RealTime Pitch Detection and Visualization",
        subtitle: "Fast and reliable",
        image: pitchvis,
        link: null,
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
        title: "RealTime Pitch Detection and Visualization",
        subtitle: null,
        image: pitchvis,
        link: null,
        features: ['JS'],
        text: <></>
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
]