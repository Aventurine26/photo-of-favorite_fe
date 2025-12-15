export default function CardInfo({ style, grade, genre, purchase, price }) {
  // 등급과 장르 텍스트 변환
  const gradeText =
    grade === 'COMMON'
      ? 'COMMON'
      : grade === 'RARE'
        ? 'RARE'
        : grade === 'SUPER_RARE'
          ? 'SUPER RARE'
          : grade === 'LEGENDARY'
            ? 'LEGENDARY'
            : 'ECT';

  const genreText =
    genre === 'TRAVEL'
      ? 'Travel'
      : genre === 'LANDSCAPE'
        ? 'Landscape'
        : genre === 'PORTRAIT'
          ? 'Portrait'
          : genre === 'OBJECT'
            ? 'Object'
            : 'ECT';

  return (
    <div
      className={`flex ${style === 'medium' ? 'gap-4 text-lg font-bold' : 'gap-2 text-sm font-normal'}`}
    >
      {/* 등급 표시 */}
      <div
        className={`${
          gradeText === 'COMMON'
            ? 'text-green-500'
            : gradeText === 'RARE'
              ? 'text-blue-500'
              : gradeText === 'SUPER RARE'
                ? 'text-purple-500'
                : gradeText === 'LEGENDARY'
                  ? 'text-pink-500'
                  : 'text-gray-500'
        }`}
      >
        {gradeText}
      </div>

      {/* 구분자 표시 */}
      <div className="text-gray-400">|</div>

      {/* 장르 표시 */}
      <div className="text-gray-300">{genreText}</div>
    </div>
  );
}
