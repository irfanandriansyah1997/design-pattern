/**
 * Device Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
export interface DeviceInterface {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(param: number): void;
    getChannel(): number;
    setChannel(channel: number): void;
}
