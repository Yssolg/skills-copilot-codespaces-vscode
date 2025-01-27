function skillsMember()
{
    var member = {
        name: 'John Doe',
        skills: ['JavaScript', 'Python', 'Ruby'],
        age: 30
    };

    // Iterate over the member object
    for (var key in member) {
        // Check if the key is 'skills'
        if (key === 'skills') {
            // Iterate over the skills array
            for (var i = 0; i < member[key].length; i++) {
                // Display each skill
                console.log(member[key][i]);
            }
        }
    }
}