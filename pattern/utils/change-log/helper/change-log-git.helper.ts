import child from 'child_process';

import { CHANGELOG_TYPES } from '@/utils/change-log/constant/change-log.const';
import {
    ChangeLogGitOutputInterface,
    ChangeLogMessageInterface
} from '@/utils/change-log/interface/change-log.interface';

import ChangeLogFileHelper from './change-log-file.helper';

/**
 * Change Log Git Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.09
 */
class ChangeLogGitHelper {
    /**
     * Update Changelog
     * @returns {void}
     */
    public static updateChangelog(version: string): void {
        const content = ChangeLogGitHelper.generateChangelogContent(version);
        ChangeLogFileHelper.writeChangelog(content);
    }

    /**
     * Generate Changelog Content
     * @returns {string}
     */
    private static generateChangelogContent(version: string): string {
        const unformattedCommit = ChangeLogGitHelper.generateUnformattedCommitMessage();
        const temporary = CHANGELOG_TYPES.map(
            ({ prefix, title, type }): ChangeLogMessageInterface => {
                const messages: string[] = [];
                unformattedCommit.map((commit) => {
                    if (commit.message.startsWith(prefix)) {
                        messages.push(
                            `* ${commit.message.split(':')[1]} ([${commit.sha.substring(
                                0,
                                6
                            )}](https://github.com/irfanandriansyah1997/design-pattern/commit/${commit.sha}))\n`
                        );
                    }
                });

                return {
                    prefix,
                    title,
                    type,
                    messages
                };
            }
        ).filter(({ messages }) => messages !== undefined && messages.length > 0);

        let response = `# Version ${version} (${new Date().toISOString().split('T')[0]})\n\n`;
        response += temporary
            .map(({ messages, title }): string => {
                let response = `## ${title}\n`;

                if (messages) {
                    messages.forEach((item) => {
                        response += item;
                    });
                    response += '\n';
                }

                return response;
            })
            .reduce((prev, current) => {
                return `${prev}${current}`;
            }, '');

        return response;
    }

    /**
     * Generate Commit Message
     * @returns {ChangeLogGitOutputInterface[]}
     */
    private static generateUnformattedCommitMessage(): ChangeLogGitOutputInterface[] {
        const latestTag = child.execSync('git describe --long').toString('utf-8').split('-')[0];
        const output = child.execSync(`git log ${latestTag}..HEAD --format=%B%H----DELIMITER----`).toString('utf-8');

        return output
            .split('----DELIMITER----\n')
            .map(
                (commit): ChangeLogGitOutputInterface => {
                    const [message, sha] = commit.split('\n');

                    return { sha, message };
                }
            )
            .filter((commit) => Boolean(commit.sha));
    }

    /**
     * Commit Version
     * @returns {void}
     */
    public static commitVersion(version: string): void {
        child.execSync('git add .');
        child.execSync(`git commit -n -m "chore(version): Bump to version ${version}"`);
        child.execSync(`git tag -a -m "Tag for version ${version}" v${version}`);
        child.execSync('git push --tags');
    }
}

export default ChangeLogGitHelper;
