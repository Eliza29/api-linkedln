    // Setup an event listener to make an API call once auth is complete
    function onLinkedInLoad() {
      IN.Event.on(IN, "auth", getProfileData);
    }

    // Handle the successful return from the API call
    function onSuccess(data) {
      console.log(data);
      let listPositions = [];
      data.positions.values.forEach(element => {
        listPositions.push(element.title);
      });
      listPositions = listPositions.join(', ');

      sessionStorage.firstName = data.firstName;
      sessionStorage.lastName = data.lastName;
      sessionStorage.connections = data.numConnections;
      sessionStorage.picture = data.pictureUrl;
      sessionStorage.location = data.location.name;
      sessionStorage.positions = listPositions;
      sessionStorage.summary = data.summary;
      sessionStorage.profile = data.publicProfileUrl;
      window.location.href = 'views/profile.html';
    }

    // Handle an error response from the API call
    function onError(error) {
      console.log(error);
    }

    // Use the API call wrapper to request the member's basic profile data
    function getProfileData() {
      // obtener los datos del usuario al iniciar sesión
      IN.API.Raw("people/~:(first-name,last-name,id,num-connections,picture-url,location,positions,summary,public-profile-url)").result(onSuccess).error(onError);      
    }