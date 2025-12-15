import { Input } from '../ui/input';

/* 포토카드 이름 Input에 대한 컴포넌트입니다 */
export default function NickNameInput({ value, handleChange, size }) {
  const sizeClass = {
    L: 'w-[520px] h-[60px]',
    M: 'w-[440px] h-[55px]',
    S: 'w-[345px] h-[55px]',
  };

  const isValidLength = (value) => {
    const isValid = value.length <= 10;
    return isValid;
  };

  const isError = value !== '' && !isValidLength(value);

  const borderClass = isError ? 'border-customRed' : 'border-white';

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="font-normal">Nickname</label>
      <Input
        name="nickName"
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="Enter your nickname"
        className={`border ${borderClass} bg-black focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 ${sizeClass[size]}`}
      />
      {isError ? (
        <p className="text-sm font-light leading-6 text-customRed">
          Nickname must be 10 characters or fewer.
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
