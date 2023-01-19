import Image from 'next/image';
import data from '../data.json';
import LinkCard from '@/components/LinkCard';
import pfp from '../public/pfp.jpg'
import SocialIcons from '@/components/SocialIcons';

export default function Home() {

  return (
    <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-10'>
    <Image
    className='rounded-full'
    alt={data.name}
    src={pfp}
    width={120}
    height={120}
    />
    <h1 className='font-semibold mb-7 '>{data.name}</h1>
   {data.links.map((link)=>(
    <LinkCard key = {link.url} {...link}/>
   ))}
    <div className="flex flex-row gap-8">
   {data.socials.map((link)=>(
    <SocialIcons key = {link.url} {...link}/>
   ))}
   </div>
    </div>
  )
}
