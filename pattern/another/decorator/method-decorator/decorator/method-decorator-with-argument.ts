import LoggerBuilder from '../builder/logger.builder';

/**
 * Logger Decorator
 * @author Irfan Andriansyah <irfan@99.co>
 * @param {'error' | 'debug' | 'info' | 'log'} type - logger
 * @since 2020.07.31
 */
export const loggerWithArgument = (
    type: 'error' | 'debug' | 'info' | 'log'
) => (
    _: object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor
): PropertyDescriptor => {
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {
        const date = new Date().toUTCString();
        const message = `[${date}]: DEBUG - call method ${propertyName}`;

        new LoggerBuilder().setMessage(message).setType(type).execute();
        return method.apply(this, args);
    };
    return propertyDesciptor;
};
