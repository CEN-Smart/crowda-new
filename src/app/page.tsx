import CardComponent from '@/components/CardComponent';
import Container from '@/components/Container';
import CustomButton from '@/components/CustomButton';
import CustomHeading from '@/components/CustomHeading';
import GridContent from '@/components/GridContent';
import ScrollToTopButton from '@/components/ScrollToTop';
import SecondaryHeading from '@/components/SecondaryHeading';
import Image from 'next/image'
import heroImg from '../../public/bgImage.svg'

export default function Home() {
  return (
    <main>
      <CustomHeading className='bg-white pt-28 text-black' primaryHeading='Unleash the Power of Your Purpose: Crowdfund with Crowda!' description='The Blockchain Powered Crowdfunding Platform that Rewards Backers and Fuels Dreams' leftButton='Create a project' rightButton='Support a project' leftBtnBgColor='black' rightBtnTextColor='black' rightBtnClassName='hover:font-semibold'
        leftBtnClassName='hover:font-semibold'
      />

      <Container className='bg-white pb-16'>
        <Image className='rounded-lg object-cover' src={heroImg} width={1920} height={1080} alt='Hero Image'
          priority
          blurDataURL='data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQJ/6t8QOwAAAABJRU5ErkJggg=='
          placeholder='blur'
        />
      </Container>
      <GridContent className='py-16 bg-white text-black' mainH='How Malaika Works' mainT={`Whether you're an individual with a brilliant idea, a group with a collective mission, or an organization with  a cause to champion, Malaika provides you with a user-friendly platform to set up your campaign. Share your story, define your funding target, and showcase your vision to the world `} priH='Create Your Vision' priT={`Get started by crafting your project with a compelling description and visuals, and defining your funding goal and reward tokens `} secH='Rally Support and Achieve Success' secT={`Launch your campaign on Malaika's blockchain-powered platform, share it widely, and witness global backers rally to support your cause, driving your project to success `} terH='Reward Your Backers and Bring Your Vision to Life' terT={`Show appreciation to backers with unique tokens, bring your projects to life, provide updates, and build lasting relations through Malaika's rewarding platform`} />
      <Container className='pt-16 pb-10 bg-white text-slate-800'>
        <SecondaryHeading center heading='Featured Projects' title={`The Malaika platform is the best way to invest in projects and get rewarded for your support. `} />
      </Container>

      <Container className=' bg-white'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Container>

      <Container className='py-12 text-center bg-white '>
        <CustomButton className='transition-all duration-300 font-bold text-gray-900 text-xl lg:text-2xl hover:text-slate-800 shadow-custom' big title='Explore More' textColor='black' border />
      </Container>
      <GridContent className='py-16 bg-white text-black' mainH='Why Malaika?' mainT={`Malaika Empowering creators, rewarding backers. A blockchain-powered crowdfunding platform where creators break free from limits, and backers earn tokens for meaningful support. Together, we ignite innovation and make a difference`} priH='Empowering Dreams' priT={`Malaika offers a platform where creators can showcase their innovative ideas, passion projects, and social causes, enabling them to raise funds and turn their dreams into reality`} secH='Blockchain Security' secT={`With Malaika built on the blockchain, both creators and backers benefits from enhanced security and transparency. Smart contracts ensure that funds are securely managed, and backers can trust in the authenticity of projects`} terH='Rewards and Impact' terT={`Backers on Malaika not only support meaningful projects but also receive rewards in returns, making their contributions even more fulfilling. Join Malaika to be a part of a positive impact on the projects and causes you care about`} />

      <Container className='bg-black text-black p-10'>
        <CustomHeading className='py-8 shadow-custom bg-white mx-auto rounded-md'
          secondaryHeading='With Malaika'
          primaryHeading='Boost Your Impact' description='As a backer, you can earn rewards for helping to fund projects. Support the projects you believe in and get rewarded for it!' leftButton='Create a project' rightButton='Support a project' rightBtnTextColor='black' leftBtnBgColor='black' rightBtnClassName='hover:font-semibold'
          leftBtnClassName='hover:font-semibold' />
      </Container>
      <ScrollToTopButton />
    </main>
  )
}
