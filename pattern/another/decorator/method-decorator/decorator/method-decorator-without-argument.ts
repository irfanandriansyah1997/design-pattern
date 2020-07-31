import LoggerBuilder from '../builder/logger.builder';

/**
 * Logger Decorator
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {'error' | 'debug' | 'info' | 'log'} type - logger
 * @since 2020.07.31
 */
export const loggerWithoutDecorator = (
    _: object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor
): PropertyDescriptor => {
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {
        const date = new Date().toUTCString();

        new LoggerBuilder().setMessage(`[${date}]: DEBUG - call method ${propertyName}`).setType('log').execute();
        return method.apply(this, args);
    };
    return propertyDesciptor;
};
