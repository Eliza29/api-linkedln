$(document).ready(() => {
  // seleccionando elementos del DOM
  let $firstName = $('#first-name');
  let $lastName = $('#last-name');
  let $country = $('#country');
  let $connections = $('#connections');
  let $positions = $('#positions');
  let $urlProfile = $('#url-profile');
  let $summary = $('#summary');
  let $photo = $('#photo');

  // añade elementos al DOM
  debugger;
  if(sessionStorage.summary !== 'undefined') {
    $summary.text(sessionStorage.summary);
  };

  if (sessionStorage.positions) {
    $positions.text(sessionStorage.positions);
  };

  if (sessionStorage.picture !== 'undefined') {
    $photo.attr('src', sessionStorage.picture);
  };

  $firstName.text(sessionStorage.firstName);
  $lastName.text(sessionStorage.lastName);
  $country.text(sessionStorage.location);
  $connections.text(sessionStorage.connections);
  $urlProfile.text(sessionStorage.profile);
  $urlProfile.attr('href', sessionStorage.profile);
});