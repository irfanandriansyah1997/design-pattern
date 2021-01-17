import { DeviceInterface } from '@/structural-pattern/bridge/device/interface/device.interface';

/**
 * Remote Control
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
class RemoteControl {
    constructor(protected device: DeviceInterface) {
        this.togglePower = this.togglePower.bind(this);
        this.volumeDown = this.volumeDown.bind(this);
        this.volumeUp = this.volumeUp.bind(this);
        this.channelDown = this.channelDown.bind(this);
        this.channelUp = this.channelUp.bind(this);
    }

    /**
     * Toggle Power
     * @returns {void}
     */
    public togglePower(): void {
        const { device } = this;

        if (device.isEnabled()) {
            device.disable();
        } else {
            device.enable();
        }
    }

    /**
     * Volume Down
     * @returns {void}
     */
    public volumeDown(): void {
        const { device } = this;

        device.setVolume(device.getVolume() - 10);
    }

    /**
     * Volume Up
     * @returns {void}
     */
    public volumeUp(): void {
        const { device } = this;

        device.setVolume(device.getVolume() + 10);
    }

    /**
     * Channel Down
     * @returns {void}
     */
    public channelDown(): void {
        const { device } = this;

        device.setChannel(device.getChannel() - 1);
    }

    /**
     * Channel Up
     * @returns {void}
     */
    public channelUp(): void {
        const { device } = this;

        device.setChannel(device.getChannel() + 1);
    }
}

export default RemoteControl;
