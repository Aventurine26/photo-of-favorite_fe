export const SORT_OPTS = new Map([
  ['LATEST', { label: 'LATEST', value: 'sortField=createdAt' }],
  ['OLDEST', { label: 'OLDEST', value: 'sortField=createdAt&sortOrder=asc' }],
  ['HIGHER_PRICE', { label: 'HIGHER PRICE', value: 'sortField=price' }],
  ['LOWER_PRICE', { label: 'LOWER PRICE', value: 'sortField=price&sortOrder=asc' }],
]);

export const FILTER_LIST = new Map([
  [
    'grade',
    {
      label: 'Grade', 
      value: '',
      options: [
        {
          value: 'common',
          label: 'COMMON',
        },
        {
          value: 'rare',
          label: 'RARE',
        },
        {
          value: 'super-rare',
          label: 'SUPER RARE',
        },
        {
          value: 'legendary',
          label: 'LEGENDARY',
        },
      ],
    },
  ],
  [
    'genre',
    {
      label: 'Genre',
      value: '',
      options: [
        {
          value: 'travel',
          label: 'TRAVEL',
        },
        {
          value: 'landscape',
          label: 'LANDSCAPE',
        },
        {
          value: 'portrait',
          label: 'PORTRAIT',
        },
        {
          value: 'object',
          label: 'OBJECT',
        },
      ],
    },
  ],
  [
    'status',
    {
      label: 'Status',
      value: '',
      options: [
        {
          value: 'onSale',
          label: 'ON SALE',
        },
        {
          value: 'soldOut',
          label: 'SOLD OUT',
        },
      ],
    },
  ],
]);

export const GRADE_STYLES = {
  COMMON: 'text-grade-common',
  RARE: 'text-grade-rare',
  SUPER_RARE: 'text-grade-super-rare',
  LEGENDARY: 'text-grade-legendary',
};