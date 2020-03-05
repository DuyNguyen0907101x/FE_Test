import axios from 'axios';

$('#side-menu-toggle').on('click', function () {
  $('.side-menu').toggleClass('side-menu-collapse')
});

(function () {
  const list = axios.get('http://www.mocky.io/v2/5e57c3773000004c00fd3d30')
    .then(response => {
      console.log(response.data)
      response.data.employees.forEach(item => {
        let news = $('<div></div>');
        let avatar = $('<img>');
        let heading = $('<h3></h3>');
        let description = $('<p></p>');
        let descriptionWrapper = $('<div></div>')
        descriptionWrapper.addClass('pl-3')
        news.addClass('m-3 p-2 d-flex col-sm-10 bg-white new')
        avatar.attr("src", item.avatar);
        avatar.addClass('bordered border-dark new-image');
        heading.text(`${item.firstName}  ${item.lastName}, 26`);
        heading.addClass('new-heading');
        description.html('<b>Location:</b> los angles<br>' +
          '<b>Occupation</b>' + item.occupation + '<br>' +
          '<b>Technologies:</b>' + item.technologies.join(', ')
        )
        description.addClass('new-descriptions');
        news.append(avatar);
        descriptionWrapper.append(heading);
        descriptionWrapper.append(description);
        news.append(descriptionWrapper)
        $('#news').append(news);
      })
    }).catch(error => {
      console.log(error)
    })
})();
