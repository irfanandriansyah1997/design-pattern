import { DeviceInterface } from './interface/device.interface';

/**
 * Radio
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
class Radio implements DeviceInterface {
    isTurn = false;
    volume = 0;
    channel = 0;

    /**
     * Is Enabled
     * @returns {boolean}
     */
    isEnabled(): boolean {
        return this.isTurn;
    }

    /**
     * Set Enable
     * @returns {void}
     */
    enable(): void {
        this.isTurn = true;
    }

    /**
     * Set Enable
     * @returns {void}
     */
    disable(): void {
        this.isTurn = false;
    }

    /**
     * Get Volume
     * @returns {number}
     */
    getVolume(): number {
        return this.volume;
    }

    /**
     * Get Volume
     * @returns {number}
     */
    setVolume(param: number): void {
        this.volume = param;
    }

    /**
     * Get Channel
     * @returns {number}
     */
    getChannel(): number {
        return this.channel;
    }

    /**
     * Get Channel
     * @returns {number}
     */
    setChannel(param: number): void {
        this.channel = param;
    }
}

export default Radio;
