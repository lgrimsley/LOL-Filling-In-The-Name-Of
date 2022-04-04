const topChamps = ["Aatrox", "Akali", "Akshan", "Alistar", "Camille", "Cho'Gath", "Darius", "Dr. Mundo", "Fiora", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Heimerdinger", "Illaoi", "Irelia", "Jax", "Jayce", "Karma", "Kayle", "Kennen", "Kled", "Lee Sin", "Lillia", "Lissandra", "Lucian", "Malphite", "Maokai", "Mordekaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Sett", "Shen", "Singed", "Sion", "Sylas", "Tahm Kench", "Teemo", "Trundle", "Tryndamere", "Twitch", "Urgot", "Vayne", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Zac", "Zed"]

const jungleChamps = ["Aatrox", "Amumu", "Darius", "Diana", "Dr. Munod", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Garen", "Gragas", "Graves", "Hecarim", "Ivern", "Jarvan IV", "Jax", "Karthus", "Kayn", "Kha'Zix", "Kindred", "Lee Sin", "Lillia", "Malphite", "Master Yi", "Mordekaiser", "Morgana", "Nasus", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", "Pantheon", "Poppy", "Rammus", "Rek'Sai", "Rengar", "Rumble", "Sejuani", "Shaco", "Shyvana", "Skarner", "Taliyah", "Talon", "Trundle", "Tryndamere", "Twitch", "Udyr", "Vi", "Viego", "Volibear", "Warwick", "Wukong", "Xin Zhao", "Zac", "Zed"]

const midChamps = ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "Aurelion Sol", "Azir", "Brand", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Ekko", "Ezreal", "Fizz", "Galio", "Gangplank", "Garen", "Gragas", "Graves", "Gwen", "Heimerdinger", "Illaoi", "Irelia", "Jayce", "Kai'Sa", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kog'Maw", "LeBlanc", "Lee Sin", "Lissandra", "Lucian", "Lux", "Malphite", "Malzahar", "Mordekaiser", "Morgana", "Neeko", "Orianna", "Pantheon", "Pyke", "Qiyana", "Rumble", "Ryze", "Seraphine", "Sett", "Swain", "Sylas", "Syndra", "Taliyah", "Talon", "Tristana", "Tryndamere", "Twisted Fate", "Veigar", "Vel'Koz", "Vex", "Viktor", "Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"]

const adcChamps = ["Akshan", "Anivia", "Aphelios", "Ashe", "Brand", "Caitlyn", "Cassiopeia", "Corki", "Draven", "Ezreal", "Graves", "Heimerdinger", "Irelia", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karthus", "Kindred", "Kog'Maw", "Lucian", "Lux", "Malzahar", "Miss Fortune", "Morgana", "Pyke", "Quinn", "Samira", "Senna", "Seraphine", "Sivir", "Swain", "Syndra", "Tahm Kench", "Teemo", "Tristana", "Twitch", "Varus", "Vayne", "Veigar", "Vel'Koz", "Xayah", "Xerath", "Yasuo", "Yone", "Zeri", "Ziggs"]

const supportChamps = ["Ahri", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Bard", "Blitzcrank", "Brand", "Braum", "Cho'Gath", "Elise", "Fiddlesticks", "Galio", "Gragas", "Heimerdinger", "Ivern", "Janna", "Jarvan IV", "Kai'Sa", "Karma", "Karthus", "Kennen", "Lee Sin", "Leona", "Lissandra", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Miss Fortune", "Morgana", "Nami", "Nautilus", "Neeko", "Nidalee", "Orianna", "Pantheon", "Poppy", "Pyke", "Rakan", "Rell", "Renata Glasc", "Senna", "Seraphine", "Shaco", "Shen", "Sona", "Soraka", "Swain", "Tahm Kench", "Taliyah", "Taric", "Thresh", "Vel'Koz", "Xerath", "Yuumi", "Zilean", "Zyra"]


let role = "";


const champReturn = document.querySelector('.champ-select')
const topBtn = document.querySelector('#topBtn')
const jungleBtn = document.querySelector('#jungleBtn')
const midBtn = document.querySelector('#midBtn')
const adcBtn = document.querySelector('#adcBtn')
const supportBtn = document.querySelector('#supportBtn')


topBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * topChamps.length)
    const champSelection = topChamps[randomIndex]
    champReturn.textContent = champSelection
})

jungleBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jungleChamps.length)
    const champSelection = jungleChamps[randomIndex]
    champReturn.textContent = champSelection
})
 
midBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * midChamps.length)
    const champSelection = midChamps[randomIndex]
    champReturn.textContent = champSelection
})

adcBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * adcChamps.length)
    const champSelection = adcChamps[randomIndex]
    champReturn.textContent = champSelection
})

supportBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * supportChamps.length)
    const champSelection = supportChamps[randomIndex]
    champReturn.textContent = champSelection
})


