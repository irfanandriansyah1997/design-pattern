import yargs from 'yargs';

import ChangeLogBuilder from './builder/change-log.builder';
import { ChangeLogType } from './interface/change-log.interface';

new ChangeLogBuilder().setType(yargs.argv.type as ChangeLogType).execute();
