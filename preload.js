const {contextBridge} = require('electron')
// 먼저 읽어야 할 파일들 설정
// window.versions 객체 생성
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

/**
 * preload.js는 Node.js 환경에 접근할 수 있으며, 
 * Renderer 프로세스와의 통신을 위해 contextBridge를 사용할 수 있다.
 */