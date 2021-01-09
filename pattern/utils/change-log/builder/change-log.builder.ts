import ChangeLogGitHelper from '@/utils/change-log/helper/change-log-git.helper';
import ChangeLogVersionHelper from '@/utils/change-log/helper/change-log-version.helper';
import { ChangeLogType } from '@/utils/change-log/interface/change-log.interface';

/**
 * Change Log Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.09
 */
class ChangeLogBuilder {
    private type: ChangeLogType = 'patch';

    /**
     * Set Type
     * @returns {ChangeLogBuilder}
     */
    public setType(type: ChangeLogType): this {
        this.type = type;
        return this;
    }

    /**
     * Execute Builder
     * @returns {void}
     */
    public execute(): void {
        const { type } = this;
        const version = ChangeLogVersionHelper.updateVersion(type);

        ChangeLogGitHelper.updateChangelog(version);
        ChangeLogVersionHelper.updatePackageJSON(version);
        ChangeLogGitHelper.commitVersion(version);
    }
}

export default ChangeLogBuilder;
