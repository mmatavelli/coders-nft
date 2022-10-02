import Logo from '../assets/Logo';

export default function Footer() {
  return (
    <div>
      <div className="h-20 px-[10%] py-10 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <Logo />
          <p className="ml-3 font-semibold">Coders NFT</p>
        </div>
      </div>
      <hr className="w-full border-[#242634]" />
    </div>
  );
}
