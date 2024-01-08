const menuNav = (language) => ([
  {
    label: language === 'id' ? 'Catatan' : 'Notes',
    to: '/',
  },
  {
    label: language === 'id' ? 'Terarsip' : 'Archived',
    to: '/arsip',
  },
]);

export default menuNav;
