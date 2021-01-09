import { ChangeLogMessageInterface } from '@/utils/change-log/interface/change-log.interface';

export const CHANGELOG_TYPES: ChangeLogMessageInterface[] = [
    {
        prefix: 'feat(',
        type: 'feat',
        title: 'Features'
    },
    {
        prefix: 'fix(',
        type: 'fix',
        title: 'Fix'
    },
    {
        prefix: 'ci(',
        type: 'ci',
        title: 'CI / CD'
    },
    {
        prefix: 'chores(',
        type: 'chores',
        title: 'Chores'
    }
];

export const CHANGELOG_WRITE_PATH = './CHANGELOG';

export const PACKAGE_WRITE_PATH = './package.json';

export const PACKAGE_IMPORT_PATH = '../../../../package.json';