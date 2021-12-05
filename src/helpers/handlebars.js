//Thiết kế bởi Nguyễn Văn Hào
const Handlebars = require('handlebars');
module.exports = {
    sum: (a, b) => a + b,

    sortable: (field, sort) => {
      const sortType = field === sort.col ? sort.type : 'default';
      const icons = {
        default: 'bi bi-funnel-fill',
        asc: 'bi bi-sort-alpha-down',
        desc: 'bi bi-sort-alpha-up',
      };
      const types = {
        default: 'asc',
        asc: 'desc',
        desc: 'asc',
      };
      const icon = icons[sortType];
      const type = types[sortType];
      const href = Handlebars.escapeExpression(`
      ?_sort&col=${field}&type=${type}`)

      const output = `<a href="${href}">
              <i class="${icon}"></i>
              </a>`;
      return new Handlebars.SafeString(output);
      },

    sortableBydate: (field, sortBydate) => {
      const icons = {
        default: 'bi bi-funnel-fill',
        asc: 'bi bi-sort-numeric-down',
        desc: 'bi bi-sort-numeric-up',
      };
      const types = {
        default: 'asc',
        asc: 'desc',
        desc: 'asc',
      };
      const icon = icons[sortBydate.type];
      const type = types[sortBydate.type];
   
      const href = Handlebars.escapeExpression(`
      ?_sortBydate&col=${field}&type=${type}`);

      const output = `<a href="${href}">
              <i class="${icon}"></i>
              </a>`;
      return new Handlebars.SafeString(output);
      },

      dateConvert: (date) =>{
        var date = new Date(date);
            return(((date.getMonth() > 8) ? (date.getMonth() + 1) : 
            ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : 
            ('0' + date.getDate())) + '/' + date.getFullYear());
      },

      //giới hạn item xuất ra
      each_upto: (ary, max, options) => {
        if(!ary || ary.length == 0)
            return options.inverse(this); 
        var result = [ ];
        // for(var i = 0; i < max && i < ary.length; i++)
        for(var i = ary.length-1; i > max; i--)
            result.push(options.fn(ary[i]));
        return result.join('');
      },
}