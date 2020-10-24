const log = (() =>{
  const log4js = require('log4js')

  log4js.configure({
    appenders: {
      _error: { 
        type: 'file',
        filename: 'logs/error.log',
        maxLogSize: 10485760,
        backups: 10,
        compress: true },
      _debug: {
        type: 'file',
        filename: 'logs/debug.log',
        maxLogSize: 10485760,
        backups: 10,
        compress: true
      },
      _info: {
        type: 'file',
        filename: 'logs/info.log',
        maxLogSize: 10485760,
        backups: 10,
        compress: true
      },
      all:{
        type: 'file',
        filename: 'logs/all.log',
        maxLogSize: 10485760,
        backups: 10,
        compress: true
      },
      out: { type: 'stdout' },
    },
    categories: {
      default:{
        appenders: ['all'],
        level: 'debug'
      },
      info: {
        appenders: ['_info', 'out'],
        level: 'info'
      },
      debug: {
        appenders: ['_debug', 'out'],
        level: 'debug'
      },
      error: {
        appenders: ['_error', 'out'],
        level: 'debug'
      }
    }
  });
  
  const loggerInfo = log4js.getLogger('info')
  const loggerDebug = log4js.getLogger('debug')
  const loggerError = log4js.getLogger('error')
  
  const _info = (mensagem) => {
    loggerInfo.info(`${mensagem}`)
  }

  const _debug = (mensagem) => {
    loggerDebug.info(`${mensagem}`)
  }

  const _error = (mensagem) => {
    loggerError.info(`${mensagem}`)
  }

  return {
    info: _info,
    debug: _debug,
    error: _error
  }
})()

module.exports = log
