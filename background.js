chrome.alarms.create({
    periodInMinutes: 1 / 60
})

chrome.alarms.onAlarm.addListener((alarm) => {
   chrome.storage.local.get(["timer", "isRunning"], (result) => {
    const time = result.timer ?? 0
    const isRunning = result.isRunning ?? false
    if(!isRunning){
        return
    }
    chrome.storage.local.set({
        timer: time + 1
    })
    chrome.action.setBadgeText({
        text:`${time}`
    })
    chrome.storage.sync.get(["notificationTime"], (result) => {
        const notificationTimes = result.notificationTime  ?? 1000
        if(time % notificationTimes == 0){
             this.registration.showNotification("Timer Extension", {
                 body: `${notificationTimes} seconds has passed`,
                 icon:"unnamed.png"
             })
        }
    })
})
})
