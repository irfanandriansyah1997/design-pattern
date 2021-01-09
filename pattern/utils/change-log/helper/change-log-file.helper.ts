/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';

import {
    CHANGELOG_WRITE_PATH,
    PACKAGE_IMPORT_PATH,
    PACKAGE_WRITE_PATH
} from '@/utils/change-log/constant/change-log.const';

/**
 * Changelog Git Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.09
 */
class ChangeLogFileHelper {
    /**
     * Get Change Log Content
     * @return {string}
     */
    public static getChangeLogContent(): string {
        return fs.readFileSync(CHANGELOG_WRITE_PATH).toString();
    }

    /**
     * Get Change Log Content
     * @return {string}
     */
    public static getPackageContent(): Record<string, any> {
        return require(PACKAGE_IMPORT_PATH);
    }

    /**
     * Get Change Log Content
     * @return {string}
     */
    public static getVersion(): string {
        return ChangeLogFileHelper.getPackageContent().version;
    }

    /**
     * Write Package JSON
     * @return {void}
     */
    public static writePackage(content: Record<string, string>): void {
        fs.writeFileSync(PACKAGE_WRITE_PATH, JSON.stringify(content, null, 2));
    }

    /**
     * Write Changelog
     * @return {void}
     */
    public static writeChangelog(newContent: string): void {
        const oldContent = ChangeLogFileHelper.getChangeLogContent();

        fs.writeFileSync(PACKAGE_WRITE_PATH, `${newContent}${oldContent}`);
    }
}

export default ChangeLogFileHelper;
