import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from "react-icons";
import { Platform } from "../hooks/useGames";

interface Prop{
    platforms: Platform[];
}
  
export default function PlatformIconList({platforms}: Prop) {
    const iconMap: { [key: string]: IconType } = { 
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux, 
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
      }
  return (
    <div className="flex flex-row gap-1 my-2">
       {platforms.map(platform => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.slug} title={platform.name} /> : null;
      })}
    </div>
  )
}
