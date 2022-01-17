
import chalk from 'chalk';
import { DateTime } from 'luxon';

export default () => {
  const LOG_LEVEL = process.env.LOG_LEVEL === 'info'
    || process.env.LOG_LEVEL === 'verbose';
  global.LOGGER = (component, message, color) => {
    if (LOG_LEVEL) {
      const dateStr = DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss');
      const comp = chalk.yellow(`[${component.toUpperCase()}]`);
      const checkIcon = color === 'action' || color === 'success'
        ? decodeURIComponent(escape('\xE2\x9C\x94')) : '';
      let alertColor = color;
      switch (color) {
        case 'action': alertColor = 'blueBright'; break;
        case 'success': alertColor = 'green'; break;
        case 'info': alertColor = 'blue'; break;
        case 'warn': alertColor = 'yellow'; break;
        case 'error': alertColor = 'red'; break;
        default: alertColor = 'blue'; break;
      }
      const msg = chalk[alertColor](`${message}`);
      const check = chalk[alertColor](`${checkIcon}`);
      console.log(`${dateStr} ${comp} ${msg} ${check}`);
    }
  };
};
