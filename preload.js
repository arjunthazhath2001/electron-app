const {contextBridge, ipcRenderer}= require('electron')


contextBridge.exposeInMainWorld('api',{
    chat: async(prompt)=>{
        return await ipcRenderer.invoke('chat',prompt)
    },
    getDocs: async(dateRange)=>{
        return await ipcRenderer.invoke('docs:fetch',dateRange)
    },
    updateDocs: async(docId,content)=>{
        return await ipcRenderer.invoke('docs:update',{docId,content})
    },
    getProfile: async(userId)=>{
        return await ipcRenderer.invoke('profile:fetch',userId)
    },
    updateProfile: async(userId,newData)=>{
        return await ipcRenderer.invoke('profile:update',{userId,newData})
    }
})



// See, let me put it in a simple way. Whenever a function is expected to return a promise, most probably that we are indirectly trying to say that that function will take some time. It has to do an activity. So, it might resolve, I mean, it might succeed or it might fail, but it takes some time. And once it's done, it has promised to return either a success or reject response. That's what it is, right?