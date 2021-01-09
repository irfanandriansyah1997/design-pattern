import { ChangeLogType } from '@/utils/change-log/interface/change-log.interface';

import ChangeLogFileHelper from './change-log-file.helper';

/**
 * Change Log Version Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.09
 */
class ChangeLogVersionHelper {
    /**
     * Update Package JSON
     * @returns {string}
     */
    public static updatePackageJSON(version: string): void {
        const content = ChangeLogFileHelper.getPackageContent() || {};

        content.version = version;
        ChangeLogFileHelper.writePackage(content);
    }

    /**
     * Update Version
     * @returns {string}
     */
    public static updateVersion(type: ChangeLogType): string {
        const version = ChangeLogFileHelper.getVersion();
        return ChangeLogVersionHelper.formattedVersion(version, type);
    }

    /**
     * Formatted Version
     * @returns {string}
     */
    private static formattedVersion(version: string, type: ChangeLogType): string {
        const versionSplit = version.split('.');

        if (versionSplit.length === 3) {
            const [major, minor, patch] = versionSplit;

            if (type === 'major') {
                return `${parseInt(major, 10) + 1}.${minor}.${patch}`;
            }

            if (type === 'minor') {
                return `${major}.${parseInt(minor, 10) + 1}.${patch}`;
            }

            if (type === 'patch') {
                return `${major}.${minor}.${parseInt(patch, 10) + 1}`;
            }

            throw new Error('[ERROR]: type not valid');
        }

        throw new Error('[ERROR]: version format not valid');
    }
}

export default ChangeLogVersionHelper;
