const {ContextBridge, contextBridge, ipcRenderer}= require('electron')


contextBridge.exposeInMainWorld('api',{
    chat: async(prompt)=>{console.log("call to LLM")},
    docs: async()=>{console.log("fetch from s3")}
})