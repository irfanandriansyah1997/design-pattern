/**
 * Change Log Git Output
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
export interface ChangeLogGitOutputInterface {
    sha: string;
    message: string;
}

/**
 * Change Log Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.01.09
 */
export type ChangeLogType = 'major' | 'minor' | 'patch';

/**
 * Change Log Message Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.09
 */
export interface ChangeLogMessageInterface {
    prefix: string;
    type: string;
    title: string;
    messages?: string[];
}
