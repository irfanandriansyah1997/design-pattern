/**
 * Enumerable Decorator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.07.31
 */
const enumerable = (value: boolean) => (_: Object, __: string, propertyDesciptor: PropertyDescriptor) => {
    propertyDesciptor.enumerable = value;
};

export default enumerable;
