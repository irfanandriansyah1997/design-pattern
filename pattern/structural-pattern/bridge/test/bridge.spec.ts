import Radio from '@/structural-pattern/bridge/device/radio';
import TV from '@/structural-pattern/bridge/device/tv';
import AdvanceRemoteControl from '@/structural-pattern/bridge/remote/advance-control';
import RemoteControl from '@/structural-pattern/bridge/remote/remote-control';

describe('Testing Bridge', () => {
    it('Testing Generate Remote', () => {
        const tv = new TV();
        const remote = new RemoteControl(tv);

        remote.togglePower();
        expect(tv.isEnabled()).toBe(true);

        remote.togglePower();
        expect(tv.isEnabled()).toBe(false);

        remote.volumeUp();
        expect(tv.getVolume()).toBe(10);

        remote.volumeDown();
        expect(tv.getVolume()).toBe(0);

        remote.channelUp();
        expect(tv.getChannel()).toBe(1);

        remote.channelDown();
        expect(tv.getChannel()).toBe(0);
    });

    it('Testing Generate Advance Remote', () => {
        const radio = new Radio();
        const remote = new AdvanceRemoteControl(radio);

        remote.togglePower();
        expect(radio.isEnabled()).toBe(true);

        remote.togglePower();
        expect(radio.isEnabled()).toBe(false);

        remote.volumeUp();
        expect(radio.getVolume()).toBe(10);

        remote.volumeDown();
        expect(radio.getVolume()).toBe(0);

        remote.channelUp();
        expect(radio.getChannel()).toBe(1);

        remote.channelDown();
        expect(radio.getChannel()).toBe(0);

        remote.volumeUp();
        expect(radio.getVolume()).toBe(10);

        remote.mute();
        expect(radio.getVolume()).toBe(0);
    });
});
