import { Link } from 'react-router-dom';
import './Navbar.css'

export const SecurityNavOptions = () => (
    <ul className="nested-dropdown-content absolute top-0 left-full -ml-6 mt-1 w-48 shadow-2xl space-y-2 rounded-lg bg-white py-2 text-black">
        <Link to='/products/security/hd-cc-camera'>
            <li className="px-3 hover:text-textPrimary">HD CC Camera</li>
        </Link>
        <Link to='/products/security/ip-camera'>
            <li className="px-3 hover:text-textPrimary">IP Camera</li>
        </Link>
        <Link to='/products/security/dvr'>
            <li className="px-3 hover:text-textPrimary">DVR</li>
        </Link>
        <Link to='/products/security/nvr'>
            <li className="px-3 hover:text-textPrimary">NVR</li>
        </Link>
        <Link to='/products/security/xvr'>
            <li className="px-3 hover:text-textPrimary">XVR</li>
        </Link>
        <Link to='/products/security/cc-camera-accessories'>
            <li className="px-3 hover:text-textPrimary">CC Camera Accessories</li>
        </Link>
        <Link to='/products/security/portable-wifi-camera'>
            <li className="px-3 hover:text-textPrimary">Portable WiFi Camera</li>
        </Link>
    </ul>
);

export const NetworkNavOptions = () => (
    <ul className="nested-dropdown-content absolute top-0 left-full -ml-6 mt-1 w-48 shadow-2xl space-y-2 rounded-lg bg-white py-2 text-black">
        <Link to='/products/networking/router'>
            <li className="px-3 hover:text-textPrimary">Router</li>
        </Link>
        <Link to='/products/networking/media-converter'>
            <li className="px-3 hover:text-textPrimary">Media Converter</li>
        </Link>
        <Link to='/products/networking/onu'>
            <li className="px-3 hover:text-textPrimary">ONU</li>
        </Link>
        <Link to='/products/networking/network-cable'>
            <li className="px-3 hover:text-textPrimary">Network Cable</li>
        </Link>
        <Link to='/products/networking/switch'>
            <li className="px-3 hover:text-textPrimary">Switch</li>
        </Link>
        <Link to='/products/networking/access-point'>
            <li className="px-3 hover:text-textPrimary">Access Point & Range Extender</li>
        </Link>
        <Link to='/products/networking/pocket-router'>
            <li className="px-3 hover:text-textPrimary">Pocket Router</li>
        </Link>
    </ul>
);

export const ServerNavOptions = () => (
    <ul className="nested-dropdown-content absolute top-0 left-full -ml-6 mt-1 w-48 shadow-2xl space-y-2 rounded-lg bg-white py-2 text-black">
        <Link to='/products/server_storage_storage/server'>
            <li className="px-3 hover:text-textPrimary">Server</li>
        </Link>
        <Link to='/products/server_storage/work-station'>
            <li className="px-3 hover:text-textPrimary">Work Station</li>
        </Link>
        <Link to='/products/server_storage/server-rack'>
            <li className="px-3 hover:text-textPrimary">Server Rack</li>
        </Link>
        <Link to='/products/server_storage/hdd-server'>
            <li className="px-3 hover:text-textPrimary">HDD Server</li>
        </Link>
        <Link to='/products/server_storage/hdd-bag-server'>
            <li className="px-3 hover:text-textPrimary">HDD Bag Server</li>
        </Link>
        <Link to='/products/server_storage/ram-server'>
            <li className="px-3 hover:text-textPrimary">Ram Server</li>
        </Link>
        <Link to='/products/server_storage/ssd-server'>
            <li className="px-3 hover:text-textPrimary">SSD Server</li>
        </Link>
        <Link to='/products/server_storage/power-supply'>
            <li className="px-3 hover:text-textPrimary">Power Supply</li>
        </Link>
    </ul>
)

export const AccessoriesNavOptions = () => (
    <ul className="nested-dropdown-content absolute top-0 left-full -ml-6 mt-1 w-48 shadow-2xl space-y-2 rounded-lg bg-white py-2 text-black">
        <Link to='/products/accessories/mouse'>
            <li className="px-3 hover:text-textPrimary">Mouse</li>
        </Link>
        <Link to='/products/accessories/cable'>
            <li className="px-3 hover:text-textPrimary">Cable</li>
        </Link>
        <Link to='/products/accessories/converter'>
            <li className="px-3 hover:text-textPrimary">Converter</li>
        </Link>
        <Link to='/products/accessories/memory-card'>
            <li className="px-3 hover:text-textPrimary">Memory Card</li>
        </Link>
        <Link to='/products/accessories/bluetooth-receiver'>
            <li className="px-3 hover:text-textPrimary">Bluetooth Receiver</li>
        </Link>
        <Link to='/products/accessories/thermal-paste'>
            <li className="px-3 hover:text-textPrimary">Thermal Paste</li>
        </Link>
    </ul>
)

export const MonitorNavOptions = () => (
    <ul className="nested-dropdown-content absolute top-0 left-full -ml-6 mt-1 w-48 shadow-2xl space-y-2 rounded-lg bg-white py-2 text-black">
        <Link to='/products/monitor_tv/smart-tv'>
            <li className="px-3 hover:text-textPrimary">Smart TV</li>
        </Link>
        <Link to='/products/monitor_tv/android-tv'>
            <li className="px-3 hover:text-textPrimary">Android TV</li>
        </Link>
    </ul>
)

export const PcNavOptions = () => (
    <ul className="nested-dropdown-content absolute top-0 left-full -ml-6 mt-1 w-48 shadow-2xl space-y-2 rounded-lg bg-white py-2 text-black">
        <Link to='/products/pc_component/processor'>
            <li className="px-3 hover:text-textPrimary">Processor</li>
        </Link>
        <Link to='/products/pc_component/motherboard'>
            <li className="px-3 hover:text-textPrimary">Motherboard</li>
        </Link>
        <Link to='/products/pc_component/desktop-ram'>
            <li className="px-3 hover:text-textPrimary">Desktop Ram</li>
        </Link>
        <Link to='/products/pc_component/powersupply'>
            <li className="px-3 hover:text-textPrimary">Powersupply</li>
        </Link>
        <Link to='/products/pc_component/casing'>
            <li className="px-3 hover:text-textPrimary">Casing</li>
        </Link>
    </ul>
)

export const StorageNavOptions = () => (
    <ul className="nested-dropdown-content absolute top-0 left-full -ml-6 mt-1 w-48 shadow-2xl space-y-2 rounded-lg bg-white py-2 text-black">
        <Link to='/products/storage/hdd'>
            <li className="px-3 hover:text-textPrimary">HDD</li>
        </Link>
        <Link to='/products/storage/prtable-hdd'>
            <li className="px-3 hover:text-textPrimary">Portable HDD</li>
        </Link>
        <Link to='/products/storage/ssd'>
            <li className="px-3 hover:text-textPrimary">SSD</li>
        </Link>
        <Link to='/products/storage/portable-ssd'>
            <li className="px-3 hover:text-textPrimary">Portable SSD</li>
        </Link>
    </ul>
)

// Export a mapping of categories to their respective options
export const categoryNavOptions = {
    security: SecurityNavOptions,
    networking: NetworkNavOptions,
    server_storage: ServerNavOptions,
    accessories: AccessoriesNavOptions,
    monitor_tv: MonitorNavOptions,
    pc_component: PcNavOptions,
    storage: StorageNavOptions,
};
