/**
 * Logger Builder
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.07.31
 */
class LoggerBuilder {
    private type: 'log' | 'info' | 'debug' | 'error' = 'log';

    private message: string = '';

    /**
     * Setter Type
     * @param {'log' | 'info' | 'debug' | 'error'} type - type logger
     * @return {LoggerBuilder}
     */
    public setType(type: 'log' | 'info' | 'debug' | 'error'): this {
        this.type = type;
        return this;
    }

    /**
     * Setter Message
     * @param {string} message - type logger
     * @return {LoggerBuilder}
     */
    public setMessage(message: string): this {
        this.message = message;
        return this;
    }

    /**
     * Execute
     * @return {void}
     */
    public execute(): void {
        const { type, message } = this;

        if (type === 'error') {
            console.error(message);
        }
        if (type === 'debug') {
            console.debug(message);
        }
        if (type === 'info') {
            console.info(message);
        }
        if (type === 'log') {
            console.log(message);
        }
    }
}

export default LoggerBuilder;
