const form = document.querySelector('#travelForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const age = formData.get('age');
  const gender = formData.get('gender');
  const destination = formData.get('destination');
  const dietaryRestrictions = formData.getAll('dietaryRestrictions[]');
  const message = `Thank you for submitting your information. 
                    Your name is ${firstName} ${lastName}, 
                    you're ${age} years old and you identify as ${gender}. 
                    You're traveling to ${destination} 
                    and you have the following dietary restrictions: ${dietaryRestrictions.join(', ')}.`;
  alert(message);
});