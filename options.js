const Input = document.querySelector("#InputVal")
const sevBtn = document.querySelector("#btns")
const TimeInput = document.querySelector("#InputNum")

sevBtn.addEventListener("click", () => {
    const name = Input.value;
    const notificationTime = TimeInput.value;
    chrome.storage.sync.set({name, notificationTime})
})


chrome.storage.sync.get(['name', "notificationTime"], (result) => {
    console.log(result);
    Input.value = result.name ?? 'Enter your name'
    TimeInput.value = result.notificationTime ?? 1000
})