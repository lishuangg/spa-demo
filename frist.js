$(function(){
  data = [
    ['Java', 1, '降', -0.0001],
    ['C', 2, '升', 0.0224],
    ['Python', 3, '升', 0.0141],
    ['C++', 4, '降', -0.0258],
    ['C#', 5, '升', 0.0207],
    ['Visual Basic.NET', 6, '降', -0.0117],
    ['JavaScript', 7, '降', -0.0085]
  ];

  var container = document.getElementById('frist');

  var hot = new Handsontable(container, {
    data: data,
    rowHeights: false,
    colHeaders: ['语言名称','排名', '升或降', '变化幅度'],
    colWidths:200,
    rowHeights:35,
    className: "htCenter htMiddle",
    columns:[
      {},
      {
        type: 'numeric'
      },
      {
        editor: 'select',
        selectOptions: ['升','降']
      },
      {
        type: 'numeric',
        numericFormat: {
          pattern: '+0.00%' || '-0.00%'
        }
      }
    ],
    licenseKey: '0d96f-90f61-4cb80-55b3b-62b3c'
  });
});
