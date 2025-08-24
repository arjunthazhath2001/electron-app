const {contextBridge, ipcRenderer}= require('electron')


contextBridge.exposeInMainWorld('api',{
    chat: async(prompt)=>{
        ipcRenderer.invoke('chat')
    },
    getDocs: async(dateRange)=>{
        ipcRenderer.invoke('docs:fetch')
    },
    updateDocs: async(docId)=>{
        ipcRenderer.invoke('docs:update')
    },
    getProfile: async(userId)=>{
        ipcRenderer.invoke('profile:fetch')
    },
    updateProfile: async(userId)=>{
        ipcRenderer.invoke('profile:update')
    }
})