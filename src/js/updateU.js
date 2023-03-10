const box = document.querySelector(".box")

export const meiningSpik = (wordEl) => {
    // console.log(wordEl[0].meanings[0].definitions.forEach((def) => {
        //     console.log(def.definition)
        // }))
        const div = document.createElement("div")
        box.innerHTML = '';
    // div.innerHTML = ''
    const { phonetics, sourceUrls, word, meanings, synonyms } = wordEl[0];
    box.innerHTML = `
        <section class="info container">
                <div class="key__container">
                    <h1 class="key-title">${word}</h1>
                    <p class="key-desc">${phonetics[1].text}</p>
                </div>
                <button class="play-btn">
                    <img class="img-play" src="./images/play.svg" alt="play">

                </button>
            </section>
        <section class="posledney">
                <div class="noun-container container">
                    <p class="noun__desc">noun</p>
                    
                </div>
                <div class="meining container">
                    <p class="meining-desc">
                        ${meanings[0].definitions[0].definition}
                    </p>
                    <ul class="meining-list">
                        ${meanings[0].definitions.map((def) => {
                            return (
                                `<li>${def.definition}</li>`
                            )
                        })}
                    </ul>
                </div>
                <div class="Synonyms container">
                    <p class="meining-desc">
                        Synonyms <span class="spaan" style="color: blueviolet;">${meanings[0].synonyms[0] ? meanings[0].synonyms[0] : "none"}</span>
                    </p>
                </div>
                <div class="noun-container container">
                    <p class="noun__desc">verb</p>
                    
                </div>
                <div class="meining container">
                    <p class="meining-desc">
                        ${meanings[1].definitions[0].definition}
                    </p>
                    <ul class="meining-list">
                        <li class="meining-item">To type on a computer keyboard..</li>
                    </ul>
                    <a class="meining-desc">${sourceUrls[0]}</a>
                </div>
            </section>

            `
    box.appendChild(div)

    const title = document.querySelector(".key-title")
    const kdeck = document.querySelector(".key-desc")

    title.textContent = word;
    kdeck.textContent = phonetics[1].text;

    const playBtn = document.querySelector('.play-btn');

    let a = ''
    playBtn.addEventListener('click', () => {
      phonetics.map((aud) => {
        if(aud.audio !== ''){
            a = aud.audio
        }
      });
      const audio = new Audio(a)
      audio.play();
    })
}

