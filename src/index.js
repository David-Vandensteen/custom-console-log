import chalk from 'chalk';

const { log, error } = console;

log.info = (...message) => { log(...message); };
log.debug = (...message) => { log(...message); };
log.error = (...message) => { error(...message); };

log.dev = (...message) => { if (process.env.NODE_ENV === 'dev') log(...message); };
log.blue = (...message) => { log(chalk.blue.bold(...message)); };
log.green = (...message) => { log(chalk.green.bold(...message)); };
log.magenta = (...message) => { log(chalk.magenta.bold(...message)); };
log.red = (...message) => { log(chalk.red.bold(...message)); };
log.yellow = (...message) => { log(chalk.yellow.bold(...message)); };

export default log;
export { log };
