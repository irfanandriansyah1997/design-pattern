/**
 * Adapter Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.16
 */
export interface AdapterInterface<Input, Output> {
    translate(input: Input): Output;
    reverseTranslate(input: Output): Input;
}
