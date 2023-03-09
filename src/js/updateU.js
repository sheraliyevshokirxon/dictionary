const box = document.querySelector(".box")



export const meiningSpik = (wordEl) => {
    console.log(wordEl[0].meanings[0].definitions.forEach((def) => {
        console.log(def.definition)
    }))
    const div = document.createElement("div")
    div.innerHTML = '';
    const { phonetics, sourceUrls, word, audio, meanings, synonyms } = wordEl[0];
    div.innerHTML = `
        <section class="posledney">
                <div class="noun-container container">
                    <p class="noun__desc">noun</p>
                    
                </div>
                <div class="meining container">
                    <p class="meining-desc">
                        ${meanings[0].definitions[0].definition ? meanings[0].definitions[0].definition : alert("none")}
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
                        Synonyms <span class="spaan" style="color: blueviolet;">${synonyms ? synonyms : 'none synonims'}</span>
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


    const playBtn = document.querySelector('.play-btn')
    playBtn.addEventListener('click', () => {
        let audio = new Audio(phonetics[0].audio)
        audio.play()
    })

    title.textContent = word;
    kdeck.textContent = phonetics[1].text;

}

