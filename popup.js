const time = document.querySelector("#time")
const nameEl = document.querySelector("#name")
const timerElement = document.querySelector("#timer")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")


function updateTimeElements() {
    chrome.storage.local.get(['timer'], (result) =>{
        const time = result.timer ?? 0
        timerElement.textContent = `The Timer is at: ${time} seconds`
    })
    const currentTime = new Date().toLocaleTimeString();
    time.textContent = `The Time is: ${currentTime}`
}
updateTimeElements()
setInterval(updateTimeElements, 1000)


chrome.storage.sync.get(["name"], (result) => {
    if(result.name !== undefined){
        nameEl.textContent = `Your name is: ${result.name}`
    }
})

startBtn.addEventListener("click", () => {
    chrome.storage.local.set({isRunning:true});
})
stopBtn.addEventListener("click", () => {
    chrome.storage.local.set({isRunning:false});
})
resetBtn.addEventListener("click", () => {
    chrome.storage.local.set({timer: 0, isRunning:false});
})