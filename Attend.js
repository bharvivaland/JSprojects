// // Variable to hold model and webcam reference
// let model, webcam;

// async function init() {
//   const URL = "https://teachablemachine.withgoogle.com/models/6x9Fp2kzG/";

//   // Load Teachable Machine model
//   model = await tmImage.load(`${URL}model.json`, `${URL}metadata.json`);

//   // Initialize webcam and start it
//   webcam = await tmImage.Webcam.create(640, 480, true);
//   await webcam.setup(); // Request permission to access the webcam
//   await webcam.play();  // Start webcam playback

//   document.getElementById("webcam").appendChild(webcam.canvas); // Attach the webcam to the <video> tag

//   // Start looping predictions
//   window.requestAnimationFrame(loop);
// }

// // Looping function to update and predict
// async function loop() {
//   webcam.update(); // Update the webcam feed
//   const predictions = await model.predict(webcam.canvas);  // Get predictions

//   if (predictions.length > 0) {
//     const name = predictions[0].className;  // Get detected face's class name
//     markAttendance(name);  // Mark attendance for that person
//   }

//   window.requestAnimationFrame(loop);
// }

// // Function to handle attendance list updating
// function markAttendance(name) {
//   const listItem = document.createElement('li');
//   listItem.classList.add('attendance-entry');
//   listItem.textContent = `${name} is present!`;

//   // You can enhance this section to only list attendance if person has not already been marked as present.
//   document.getElementById('attendance-list').appendChild(listItem);
// }

// // Start webcam when the page is loaded
// init();
