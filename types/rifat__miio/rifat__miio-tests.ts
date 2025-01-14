import { AirPurifier3, device } from '@rifat/miio';

device({ address: '192.168.0.1' }); // $ExpectType Promise<MiioDevice>
device({}); // $ExpectError
device({ token: '' }); // $ExpectError
device({ address: '192.168.0.1', token: '' }); // $ExpectType Promise<MiioDevice>

device({ address: '192.168.0.1' }); // $ExpectType Promise<MiioDevice>

device({ address: '192.168.0.1' }).then(miooDevice => {
    const d = miooDevice as AirPurifier3; // $ExpectType AirPurifier3

    d.matches("type:air-purifier"); // $ExpectType true

    d.changeBuzzer(''); // $ExpectType Promise<string>
    d.changeChildLock(''); // $ExpectType Promise<string>
    d.changeFan(''); // $ExpectType Promise<string>
    d.changeFanSpeed(''); // $ExpectType Promise<string>
    d.changeFavoriteLevel(''); // $ExpectType Promise<string>
    d.changeFavoriteSpeed(''); // $ExpectType Promise<string>
    d.changeLEDBrightness(''); // $ExpectType Promise<string>
    d.changeMode(''); // $ExpectType Promise<string>
    d.changePower(''); // $ExpectType Promise<string>

    d.childLock(); // $ExpectType Promise<string>
    d.updateChildLock(''); // $ExpectType void
    d.filterLifeLevel(); // $ExpectType Promise<string>
    d.updateFilterLifeLevel(''); // $ExpectType void

    d.debug(); // $ExpectType void
});
