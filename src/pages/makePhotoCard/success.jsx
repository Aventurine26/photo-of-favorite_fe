import Image from 'next/image';
import { useRouter } from 'next/router';
import SecondaryButton from '@/components/shared/SecondaryButton';

const goToMyGallery = () => {
  const router = useRouter();
  router.push('/mygallery');
}

export default function Success() {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-9">
      {/* <button className="relative top-[-110px] right-[-300px]">
        <Image src="/images/type=close.png" width={24} height={24} />
      </button> */}{' '}
      {/* 버튼이 필요한가? */}
      <h1 className="font-baskin text-[46px] font-normal leading-[47px]">
        Make Photo Card <span className="text-customMain">Success</span>
      </h1>
      <p className="text-xl font-bold leading-7">Success!</p>
      <SecondaryButton
        label={'Go to My Gallery'}
        className={'h-[60px] w-[440px] border-white'}
        handleClick={goToMyGallery}
      />
    </div>
  );
}
