import { DeviceInterface } from '@/structural-pattern/bridge/device/interface/device.interface';

import RemoteControl from './remote-control';

/**
 * Advance Remote Control
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.01.17
 */
class AdvanceRemoteControl extends RemoteControl {
    constructor(device: DeviceInterface) {
        super(device);

        this.mute = this.mute.bind(this);
    }

    /**
     * Mute
     * @returns {void}
     */
    mute(): void {
        const { device } = this;
        device.setVolume(0);
    }
}

export default AdvanceRemoteControl;
